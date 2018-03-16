import {Link} from 'react-router-dom';
import {VBox, HBox} from 'react-stylesheet';
import {Label, TextBox, Gutter} from '../../styles/MainStyle.js';

class PoliceCorrectAnswer extends React.Component {
  render() {
    const answer = this.props.location.userInput;

    return (
      <div id='correctAnswer'
           style={{padding: `0 ${Gutter.def}`}}>
        <HBox justifyContent='center'>
          <img src={this.props.location.policeIcon}/>
        </HBox>
        <iframe width="100%" height="215" src="https://www.youtube.com/embed/0FdNlhZAYBE"></iframe>
        <Label>{answer} is the right answer</Label>
        <TextBox>
          <Link to={{
            pathname: '/finalscore',
            groupName: localStorage.groupName,
            gameMinutes: localStorage.gameMinutes,
            gameSeconds: localStorage.gameSeconds
          }}>צפו בלוח התוצאות</Link>
        </TextBox>
      </div>
    )
  }
}

export default PoliceCorrectAnswer;