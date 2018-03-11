import classNames from 'classnames';
import {TextBox, TextBoxWarning, Color} from '../../components/styles/MainStyle.js'
import {VBox, HBox} from 'react-stylesheet';

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
             ...!this.state.active && {display: 'none'}
           }}>
        <VBox flexDirection={direction == 'top' ? 'column' : 'column-reverse'}>
          <TextBox style={{border:'4px solid' + Color.yellow}}>
            <p>{this.props.content}</p>
          </TextBox>
          <TextBoxWarning>
            <button onClick={this.hideWarning}
                    style={{color: '#fff'}}>
              הבנתי
            </button>
          </TextBoxWarning>
        </VBox>
      </div>
    )
  }
}

const warningWrapper = {
    width: '15rem',
    position: 'absolute',
    zIndex: '1000'
  };



export default WarningMessage;