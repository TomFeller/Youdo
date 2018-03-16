import {Link} from 'react-router-dom';
import {VBox, HBox} from 'react-stylesheet';
import {TextBox, Gutter} from '../../styles/MainStyle.js';

class PoliceCorrectAnswer extends React.Component {
  render() {
    const answer = this.props.location.userInput,
    policeIconUrl = 'http://127.0.0.1:8082/wordpress/wp-content/uploads/2018/03/police-logo.png',
      userUrl = 'http://127.0.0.1:8082/wordpress/wp-content/uploads/2018/03/icon-face.png'
    return (
      <div id='correctAnswer'
           style={{padding: `0 ${Gutter.def}`}}>
        <VBox>
          <HBox justifyContent='center'>
            <img src={policeIconUrl}/>
          </HBox>
          <div style={{margin: `2rem 0`}}>
            <iframe width="100%" height="180" src="https://www.youtube.com/embed/0FdNlhZAYBE"></iframe>
            <TextBox style={{marginTop: Gutter.def}}>
              <Link to={{
                pathname: '/finalscore',
                groupName: localStorage.groupName,
                gameMinutes: localStorage.gameMinutes,
                gameSeconds: localStorage.gameSeconds
              }}>צפו בלוח התוצאות</Link>
            </TextBox>
          </div>
          <HBox justifyContent='center'>
            <img src={userUrl}
                 style={{display: 'block', height: '15rem'}}/>
          </HBox>
        </VBox>
      </div>
    )
  }
}

export default PoliceCorrectAnswer;