import {VBox, HBox} from 'react-stylesheet';
import {Label, Input, Gutter, TextBox, Color} from '../styles/MainStyle.js';
import DataStore from '../../flux/stores/DataStore.js';
import PoliceInsertName from './police/PoliceInsertName.js';

class Police extends React.Component {
  constructor(props) {
    super(props)
    this.submitNumberInput = this.submitNumberInput.bind(this);
    this.passwordEndPoint = 'http://127.0.0.1:8082/wordpress/wp-json/acf/v3/pages/113/';
    this.state = ({
      isValid: -1,
      userInput: '',
      password: '',
      correctAnswer: ''
    });

    this.numberClick = this.numberClick.bind(this);
  }

  componentDidMount() {
    fetch(this.passwordEndPoint)
      .then(results => {
        return results.json();
      }).then(data => {
      let password = data.acf.police_password,
        correctAnswer = data.acf.game_correct_answer;
      this.setState({
        password: password,
        correctAnswer: correctAnswer
      });
    });
  }

  numberClick(num) {
    const number = this.state.userInput += num;
    this.setState({
      userInput: number
    });
    console.log(this.state.userInput);
  }

  submitNumberInput() {
    this.setState({
      isValid: this.state.userInput == this.state.password ? 1 : 0
    })
  }

  render() {
    const {isValid, userInput, correctAnswer} = this.state;
    const policeData = DataStore.getPostBySlug('police');
    let policeIconUrl = 'http://127.0.0.1:8082/wordpress/wp-content/uploads/2018/03/police-logo.png';
    if (isValid == 1) {
      return (
        <VBox justifyContent='space-between'
              id='police'
              className='police'
              style={{
                padding: `${Gutter.lg}`,
                height: '100vh'
              }}>
          <HBox justifyContent='center'>
            <img src={policeIconUrl}/>
          </HBox>
          <PoliceInsertName password={userInput}
                            nameAnswer={correctAnswer}
                            policeIcon={policeIconUrl}
          />
          <HBox justifyContent='center'>
            <img src='http://127.0.0.1:8082/wordpress/wp-content/uploads/2018/03/icon-face.png'
                 style={{display: 'block', height: '15rem'}}/>
          </HBox>
        </VBox>
      );
    } else {
      return (
        <VBox justifyContent='space-between'
              id='police'
              className='police'
              style={policeNumbersButtons}>
            <HBox flexWrap='wrap' flexDirection='row-reverse' style={buttons}>
              <div style={num} onClick={() => this.numberClick('1')}></div>
              <div style={num} onClick={() => this.numberClick('2')}></div>
              <div style={num} onClick={() => this.numberClick('3')}></div>
              <div style={num} onClick={() => this.numberClick('4')}></div>
              <div style={num} onClick={() => this.numberClick('5')}></div>
              <div style={num} onClick={() => this.numberClick('6')}></div>
              <div style={num} onClick={() => this.numberClick('7')}></div>
              <div style={num} onClick={() => this.numberClick('8')}></div>
              <div style={num} onClick={() => this.numberClick('9')}></div>
              <div style={num} onClick={() => this.numberClick('*')}></div>
              <div style={num} onClick={() => this.numberClick('0')}></div>
              <div style={num} onClick={() => this.numberClick('#')}></div>
            </HBox>
            <span style={wrongPassword}>{isValid == 0 ? 'סיסמא שגוייה' : ''}</span>
            <TextBox style={submitButton}>
              <button onClick={this.submitNumberInput}></button>
            </TextBox>
        </VBox>
      );
    }
  }
}

const policeNumbersButtons = {
    padding: Gutter.lg,
    height: '100vh',
    background: 'url("http://127.0.0.1:8082/wordpress/wp-content/uploads/2018/03/callnumbers.png") no-repeat',
    backgroundSize: 'contain',
    backgroundPositionX: 'center',
    backgroundColor: '#1a8d8d',
    zIndex:'3'
  },
  submitButton = {
    width: '8rem',
    height: '8rem',
    backgroundColor: 'red',
    borderRadius: '50%',
    position: 'absolute',
    bottom:'8rem',
    left: '18%',
    opacity: '.5'
  },
  buttons = {
    border: '.2rem solid #000',
    position: 'absolute',
    height:'23.2%',
    width: '37%',
    top: '42%',
    left: '31%'
  },
  num = {
    width:'33.33%',
    border:'1px solid red',

  },
  wrongPassword = {
    position: 'absolute',
    zIndex: '10'
  }

export default Police;
