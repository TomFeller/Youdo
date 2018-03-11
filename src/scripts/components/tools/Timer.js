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
        <div className='time'>{this.state.time}</div>
        {localStorage.clue > 0 && <div className='clues'>מספר רמזים:  {localStorage.clue}</div>}
      </div>
    );
  }
}

export default Timer;
