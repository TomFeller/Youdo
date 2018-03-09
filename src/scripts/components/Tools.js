import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
import WarningMessage from './tools/WarningMessage.js';
import classNames from 'classnames';

class Tools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: DataStore.getAllPosts(),
      isTimerRunning: false
    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    this.setState({
      isTimerRunning: true
    });
    var seconds = 0;
    var minutes = 0;

    function incrementSeconds() {
      seconds += 1;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      localStorage.gameSeconds = seconds;
      localStorage.gameMinutes = minutes;
      console.log(localStorage.gameMinutes + ':' + localStorage.gameSeconds);
    }

    setInterval(incrementSeconds, 1000);
  }

  render() {
    let toolData = DataStore.getAllPosts();

    return (
      <div id='tools'
           className='tools-wrapper'
           style={toolsWrapper}>
        <div id='tool-timer'
             className='tool tool-timer'
             onClick={this.startTimer}
             style={tool}>
          Timer
        </div>
        {
          toolData.map((post, i) => {
            return (
              <div key={i}
                   id={'tool-' + post.id}
                   className={classNames(
                     'tool',
                     'tool-' + post.slug)}
                   style={tool}>
                {post.slug == 'clue' &&
                <WarningMessage content='מתקשים? 5 דקות לזמן המשחק'
                                tag={post.slug}
                                direction={'top'}/>}
                <Link to={this.state.isTimerRunning ? post.slug : 'tools'}>
                  <h3>{post.title.rendered}</h3>
                </Link>

              </div>
            );
          })
        }
      </div>
    );
  }
}

const toolsWrapper = {
  display: 'flex',
  flexWrap: 'wrap'
};

const tool = {
  border: '1px solid red',
  width: '50%'
}

export default Tools;

