import classNames from 'classnames';
import {Button} from '../../components/styles/MainStyle.js'
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
        <Button>
          <button onClick={this.hideWarning}>הבנתי</button>
        </Button>
      </div>
    )
  }
}

const
  textBox = {
    backgroundColor: 'blue',
    border: '.4rem solid yellow',
    borderRadius: '1rem',
    color: 'yellow',
    padding: '.5rem'
  },
  warningWrapper = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    zIndex: '1000'
  },
  buttonIsTop = {
    flexDirection: 'column-reverse'
  },
  buttonIsBottom = {
    flexDirection: 'column'
  };

export default WarningMessage;