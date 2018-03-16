import {VBox, HBox} from 'react-stylesheet';
import {Radius, FontSize} from '../../components/styles/MainStyle.js';

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
          <div className='time'
               style={{
                 borderLeft: '1px solid',
                 padding: '0 .5rem',
               }}>
            {this.state.time}</div>
          <span style={{padding: '0 .5rem'}}>o</span>
        </HBox>
        {localStorage.clue > 0 && <div className='clues'>מספר רמזים: {localStorage.clue}</div>}
      </div>
    );
  }
}

export default Timer;


const timerWrapper = {
  border: '1px solid',
  borderRadius: Radius,
  fontSize: FontSize.sm
};