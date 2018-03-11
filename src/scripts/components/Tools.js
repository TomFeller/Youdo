import {Link} from 'react-router-dom';
import {VBox, HBox} from 'react-stylesheet';
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
    let toolData = DataStore.getAllPosts(),
      timerData = DataStore.getPostBySlug('timer');

    return (
      <div id='tools'>
        <HBox flexWrap='wrap'>
          <div id='tool-timer'
               className='tool tool-timer'
               onClick={localStorage.isTimerRunning && this.startTimer}
               style={tool}>
            <HBox justifyContent='center' alignItems='center'>
              <img style={{width:'width:100%;'}} src={timerData.better_featured_image.media_details.sizes.thumbnail.source_url} />
            </HBox>
          </div>
          {
            toolData.map((post, i) => {
              const postCategory = post.categories[0];
              let iconUrl = post.better_featured_image != null && post.better_featured_image.media_details.sizes.thumbnail.source_url;
              if (postCategory == 6 && post.slug != 'timer') {
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
                      <HBox justifyContent='center' alignItems='center'>
                        <img src={iconUrl}/>
                      </HBox>
                    </Link>
                  </div>
                );
              }
            })
          }
        </HBox>
      </div>
    );
  }
}

const toolDisable = {
  opacity: 0.4
};


const tool = {
  border: '.1rem solid red',
  width: '50%',
  position: 'relative'
};

export default Tools;

