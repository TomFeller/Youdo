import DataStore from 'flux/stores/DataStore.js';
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

  submitNumberInput() {
    this.textInput.focus();
    this.setState({
      isValid: this.textInput.value == this.state.password ? 1 : 0,
      userInput: this.textInput.value
    });
  }

  render() {
    const {isValid, userInput, correctAnswer} = this.state;

    if (isValid == 1) {
      return (
        <div id='police' className='police'>
          <h2>{localStorage.groupname}</h2>
          <h2>Police Icon</h2>
          <PoliceInsertName password={userInput}
                            nameAnswer={correctAnswer}/>
        </div>
      );
    } else {
      return (
        <div id='police' className='police'>
          <h2>Police Icon</h2>
          <h2>{localStorage.groupname}</h2>
          <h3>הכנס סיסמא:</h3>
          <input
            type='password'
            ref={(input) => this.textInput = input}/>
          <span>{isValid == 0 ? 'סיסמא שגוייה' : ''}</span>
          <input
            type="button"
            value="שלח"
            onClick={this.submitNumberInput}/>
        </div>
      );
    }
  }
}


export default Police;
