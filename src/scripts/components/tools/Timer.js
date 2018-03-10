class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      time: localStorage.gameMinutes + ':' + localStorage.gameSeconds
    });
  }
  render() {
    return (
      <div id='Timer' className='timer'>
        <div className='time'>{this.state.time}</div>
      </div>
    );
  }
}

export default Timer;
