import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
import WarningMessage from './tools/WarningMessage.js';
import classNames from 'classnames';

class Tools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: DataStore.getAllPosts(),
      isTimerRunning: this.props.location.isTimerRunning
    };
    this.startTimer = this.startTimer.bind(this);
    localStorage.isTimerRunning = false;
  }

  startTimer() {
    localStorage.isTimerRunning = true;
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
      localStorage.gameSeconds = seconds <= 9 ? '0' + seconds : seconds;
      localStorage.gameMinutes = minutes <= 9 ? '0' + minutes : minutes;
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
             onClick={localStorage.isTimerRunning && this.startTimer}
             style={tool}>
          Timer
        </div>
        {
          toolData.map((post, i) => {
            const postCategory = post.categories[0];
            if (postCategory == 6) {
              return (
                <div key={i}
                     id={'tool-' + post.id}
                     className={classNames(
                       'tool',
                       'tool-' + post.slug)}
                     style={{...tool, ...!this.state.isTimerRunning && toolDisable}}>
                  {post.slug == 'clue' &&
                  <WarningMessage content='מתקשים? 5 דקות לזמן המשחק'
                                  tag={post.slug}
                                  direction={'top'}/>}
                  <Link to={this.state.isTimerRunning ? post.slug : 'tools'}>
                    <h3>{post.title.rendered}</h3>
                  </Link>
                </div>
              );
            }
          })
        }
      </div>
    );
  }
}

const toolDisable = {
  opacity: 0.4
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

