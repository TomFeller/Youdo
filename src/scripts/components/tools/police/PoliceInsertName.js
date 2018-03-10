import {Link} from 'react-router-dom';
import PoliceCorrectAnswer from './PoliceCorrectAnswer.js';
import PoliceWrongAnswer from './PoliceWrongAnswer.js';
import WarningMessage from '../WarningMessage.js';

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
    const {confirm, answer} = this.state;
    let url = (answer === 1) ? '/policecorrectanswer' : '/policewronganswer';
    return (
      <div>
        <div className='guessName'>
          <WarningMessage content='תשובה לא נכונה תוסיף 3 דקות לזמן הסופי'
                          direction='bottom'/>
          <div>
            <h3>שם הנעדר:</h3>
            <input type='text'
                   ref={(input) => this.textInput = input}
                   onChange={this.checkAnswer}/>

            <input type='button'
                   disabled={!answer}
                   onClick={this.checkAnswer}
                   value={'שלחי'}/>
            <Link to={{
              pathname: url
            }}>link</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default PoliceInsertName;