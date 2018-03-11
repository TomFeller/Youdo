import {VBox, HBox} from 'react-stylesheet';
import {Label, Input, TextBox} from '../styles/MainStyle.js';
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
    const policeData = DataStore.getPostBySlug('police');
    let policeIconUrl = policeData.better_featured_image != null && policeData.better_featured_image.media_details.sizes.thumbnail.source_url;
    if (isValid == 1) {
      return (
        <div id='police' className='police'>
          <h2>{localStorage.groupname}</h2>
          <HBox justifyContent='center'>
            <img src={policeIconUrl}/>
          </HBox>
          <PoliceInsertName password={userInput}
                            nameAnswer={correctAnswer}
                            policeIcon={policeIconUrl}/>
        </div>
      );
    } else {
      return (
        <div id='police' className='police'>
          <HBox justifyContent='center'>
            <img src={policeIconUrl}/>
          </HBox>
          <h2>{localStorage.groupname}</h2>
          <Label>הכנס סיסמא:</Label>
          <Input>
            <input type='password'
                   ref={(input) => this.textInput = input}/>
          </Input>
          <span>{isValid == 0 ? 'סיסמא שגוייה' : ''}</span>
          <TextBox>
            <button onClick={this.submitNumberInput}>שלח</button>
          </TextBox>
          <HBox justifyContent='center'>
            <img src={policeIconUrl}/>
          </HBox>
        </div>
      );
    }
  }
}


export default Police;
