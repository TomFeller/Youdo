import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
import classNames from 'classnames';

class Tools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: DataStore.getAllPosts()
    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
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
    }

    setInterval(incrementSeconds, 1000);
  }

  render() {
    let toolData = DataStore.getAllPosts();

    return (
      <div id='tools' className='tools-wrapper'>
        <div id='timer'
             className='tool tool-timer'
             onClick={this.startTimer}>
          Timer
        </div>
        {
          toolData.map((post, i) => {
            return (
              <div key={i}
                   id={'tool-' + post.id}
                   className={classNames(
                     'tool',
                     'tool-' + post.slug)}>
                <Link to={post.slug}>
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

export default Tools;