import classNames from 'classnames';

class WarningMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: true};
    this.hideWarning = this.hideWarning.bind(this);
  }

  hideWarning() {
    this.setState({active: false});
    localStorage.disablePage = false;
  }

  render() {
    const {direction} = this.props;
    localStorage.disablePage = true;
    return (
      <div className={classNames('warning', 'warning-' + this.props.tag)}
           style={{
             ...warningWrapper,
             ...direction == 'top' ? buttonIsTop : buttonIsBottom,
             ...!this.state.active && {display: 'none'}
           }}>
        <div className='warning-textBox'
             style={textBox}>
          <p>{this.props.content}</p>
        </div>
        <div className='warning-button'>
          <button onClick={this.hideWarning}>הבנתי</button>
        </div>
      </div>
    )
  }
}

const
  textBox = {
    backgroundColor: 'blue',
    border: '4px solid yellow',
    borderRadius: '10px',
    color: 'yellow',
    padding: '5px'
  },
  warningWrapper = {
    display: 'flex',
    alignItems: 'center'
  },
  buttonIsTop = {
    flexDirection: 'column-reverse'
  },
  buttonIsBottom = {
    flexDirection: 'column'
  };

export default WarningMessage;