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
          <VBox className='time'
                style={{
                  borderLeft: '1px solid',
                  padding: '.3rem .5rem',
                }}>
            {this.state.time}
          </VBox>
          <VBox justifyContent='center' style={{padding: '0 .5rem'}}>
            <img width='15rem' src='http://127.0.0.1:8082/wordpress/wp-content/uploads/2018/03/clock.png'/>
          </VBox>
        </HBox>
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