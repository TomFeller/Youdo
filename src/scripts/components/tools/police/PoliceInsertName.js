import PoliceCorrectAnswer from './PoliceCorrectAnswer.js';
import PoliceWrongAnswer from './PoliceWrongAnswer.js';

class PoliceInsertName extends React.Component {
  constructor(props) {
    super(props);
    this.confirmMessage = this.confirmMessage.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);

    this.state = {
      confirm: true,
      answer: false
    }
  }

  confirmMessage() {
    this.setState({
      confirm: false
    })
  }

  checkAnswer() {
    this.setState({
      answer: this.textInput.value === this.props.nameAnswer ? 1 : 0
    });
  }

  render() {
    return (
      <div>
        {this.state.confirm &&
        <div className='policeWarning'>
          תשובה לא נכונה תוסיף 3 דקות לזמן הסופי.
          <input type='button'
                 value='הבנתי'
                 onClick={this.confirmMessage}
          />
        </div>
        }
        <div className='guessName'>
          {!this.state.confirm &&
          this.state.answer !== 1 &&
          this.state.answer !== 0 &&
          <div>
            <h3>שם הנעדר:</h3>
            <input type='text'
                   disabled={this.state.confirm}
                   ref={(input) => this.textInput = input}/>
            <input type='button'
                   disabled={this.state.confirm}
                   onClick={this.checkAnswer}
                   value={'שלחי'}/>
          </div>
          }
          {(this.state.answer === 1) ?
            <PoliceCorrectAnswer userInput={this.textInput.value}
                                 groupName={this.props.groupName}/> :
          (this.state.answer === 0) &&
          <PoliceWrongAnswer userInput={this.textInput.value}/>
          }
        </div>
      </div>
    )
  }
}

export default PoliceInsertName;