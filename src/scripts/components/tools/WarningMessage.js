import classNames from 'classnames';
import {TextBox, TextBoxWarning, Gutter, Color} from '../../components/styles/MainStyle.js'
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
    const {direction, top} = this.props;
    localStorage.disablePage = true;
    return (
      <div className={classNames('warning', 'warning-' + this.props.tag)}
           style={{
             top: {top},

             ...warningWrapper,
             ...!this.state.active && {display: 'none'}
           }}>
        <VBox flexDirection={direction == 'top' ? 'column' : 'column-reverse'}
              style={{
                height: '25rem',
                justifyContent:  direction == 'top' ? 'flex-end' : 'flex-end'
              }}
        >
          <TextBox style={{
            border: '4px solid' + Color.yellow,
            margin: `${Gutter.sm} 0`,
            padding: `${Gutter.sm} .5rem`
          }}>
            <div>{this.props.content}</div>
          </TextBox>
          <TextBoxWarning>
            <button onClick={this.hideWarning}
                    style={{color: '#fff'}}>
              הבנתי
            </button>
            <div style={direction == 'top' ? rectangleTop : rectangleBottom}></div>
          </TextBoxWarning>
        </VBox>
      </div>
    )
  }
}

const warningWrapper = {
  width: '15rem',
  height: '20rem',
  position: 'fixed',
  zIndex: '1000',
  top: '2rem',
  left: '2rem'
};

const rectangleTop = {
  position: 'absolute',
  top: '3rem',
  width: '0',
  height: '0',
  borderBottom: `4rem solid ${Color.blue}`,
  borderRight: '4rem solid transparent',
  left: '2rem'
};

const rectangleBottom = {
  position: 'absolute',
  bottom: '7.8rem',
  width: '0',
  height: '0',
  borderTop: `4rem solid ${Color.blue}`,
  borderLeft: '4rem solid transparent',
  right: '2rem'
};


export default WarningMessage;