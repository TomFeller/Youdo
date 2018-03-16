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
    localStorage.clueVerified = true;
    localStorage.disablePage = false;
  }

  render() {
    const {direction, top, left, width, name} = this.props;
    localStorage.disablePage = true;
    return (
      <div className={classNames('warning', 'warning-' + this.props.tag)}
           style={{
             ...{top},
             ...{left},
             ...warningWrapper,
             ...!this.state.active && {display: 'none'}
           }}>
        <VBox flexDirection={direction == 'top' ? 'column' : 'column-reverse'}
              style={{
                height: '25rem',
                ...{width},
                justifyContent: direction == 'top' ? 'flex-end' : 'flex-end'
              }}>
          <TextBox style={{
            border: '4px solid' + Color.yellow,
            margin: `${Gutter.sm} 0`,
            padding: `${Gutter.sm} .5rem`
          }}>
            <div style={{color: Color.yellow}}>{this.props.content}</div>
          </TextBox>
          <TextBoxWarning>
            <button onClick={this.hideWarning}
                    style={{color: '#fff'}}>
              הבנתי
            </button>
            <div style={{
              ...direction == 'top' ? rectangleTop : rectangleBottom,
              ...name == 'police' && policeWarning
            }}></div>
          </TextBoxWarning>
        </VBox>
      </div>
    )
  }
}

const warningWrapper = {
  height: '20rem',
  position: 'fixed',
  zIndex: '1000'
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
  bottom: '.6rem',
  width: '0',
  height: '0',
  borderTop: `4rem solid ${Color.blue}`,
  borderLeft: '4rem solid transparent',
  right: '2rem'
};

const policeWarning = {
  top: '5.4rem'
}


export default WarningMessage;