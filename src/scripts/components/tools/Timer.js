import {VBox, HBox} from 'react-stylesheet';
import {Radius} from '../../components/styles/MainStyle.js';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      time: localStorage.gameMinutes + ':' + localStorage.gameSeconds
    });

  }

  componentDidMount() {
    var _this = this;

    function updateState() {
      _this.setState({
        time: localStorage.gameMinutes + ':' + localStorage.gameSeconds,
      });
    }

    setInterval(updateState, 1000);
  }

  render() {
    return (
      <div id='Timer' className='timer'>
        <HBox style={timerWrapper}>
          <div className='time' style={{borderLeft: '1px solid', padding:'0 .5rem'}}>{this.state.time}</div>
          <span style={{padding:'0 .5rem'}}>o</span>
        </HBox>
      </div>
    );
  }
}

export default Timer;


const timerWrapper = {
  border: '1px solid',
  borderRadius: Radius
};