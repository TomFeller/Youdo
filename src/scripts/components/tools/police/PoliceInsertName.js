import {Link} from 'react-router-dom'
import {Label, Input, TextBox} from '../../styles/MainStyle.js';


import WarningMessage from '../WarningMessage.js';

class PoliceInsertName extends React.Component {
  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);

    this.state = {
      isCorrect: true,
      answer: false
    }
  }

  checkAnswer() {
    this.setState({
      answer: this.textInput.value,
      isCorrect: this.textInput.value === this.props.nameAnswer ? 1 : 0
    });
  }

  render() {
    const {isCorrect, answer} = this.state;
    let url = (isCorrect === 1) ? '/policecorrectanswer' : '/policewronganswer';
    return (
      <div>
        <div className='guessName'>
          <WarningMessage content='תשובה לא נכונה תוסיף 3 דקות לזמן הסופי'
                          direction='bottom'/>
          <div>
            <Label>שם הנעדר:</Label>
            <Input>
              <input type='text'
                     ref={(input) => this.textInput = input}
                     onChange={this.checkAnswer}/>
            </Input>
            <TextBox>
              <Link to={{
                pathname: url,
                userInput: answer,
                policeIcon: this.props.policeIcon
              }}>שלח</Link>
            </TextBox>
          </div>
        </div>
      </div>
    )
  }
}

export default PoliceInsertName;