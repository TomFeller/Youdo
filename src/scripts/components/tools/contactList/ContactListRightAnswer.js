import {Link} from 'react-router-dom';
import {VBox, HBox} from 'react-stylesheet';
import {FontSize, Color} from '../../../components/styles/MainStyle.js'

class ContactListRightAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.getRandomPhoneNumber = this.getRandomPhoneNumber.bind(this);
  }

  getRandomPhoneNumber() {
    let number = '05';
    for (var i = 3; i < 13; i++) {
      if (i == 4 || i == 8) {
        number += '-';
      } else {
        number += Math.floor(Math.random() * 10);
      }
    }
    return number;
  }

  render() {
    const member = this.props.location.member.title,
      isCorrect = this.props.location.isCorrect; // use isCorrect to put the audio
    let phoneNumber = this.getRandomPhoneNumber();
    return (
      <div id='member' className='member'>
        <div className='member-panel' style={panel}>
          <VBox alignItems='center' justifyContent='center' style={details}>
            <div style={memberName}>{member}</div>
            <div style={{margin: '1rem 0 .5rem'}}>
              <span style={{color:'#9eabb3'}}>{phoneNumber} | ישראל</span>
            </div>
            <span style={{color:'#9eabb3'}}>מחייג</span>
          </VBox>
          <HBox justifyContent='center' style={backButton}>
            <Link to={{
              pathname: '/tools',
              isTimerRunning: true}}
                  style={link}>
            </Link>
          </HBox>
        </div>
      </div>
    )
  }
}

const panel = {
  position: 'relative',
  top: '0',
  zIndex: '1',
  height: '100vh',
  width: '100%',
  backgroundImage: 'url("http://127.0.0.1:8082/wordpress/wp-content/uploads/2018/03/call_screen.jpg")',
  backgroundSize: 'cover'
};

const link = {
  width: '7.2rem',
  height: '7.2rem',
  display: 'block',
  borderRadius: '50%'
};
const backButton = {
  position: 'absolute',
  width: '100%',
  height: '7.2rem',
  bottom: '4rem',
  margin: 'auto',
  left: '0',
  display: 'flex',
  alignItems: 'center'
};

const details = {
  position: 'relative',
  width: '100%',
  zIndex: '1',
  top: '11.5rem',
  color: '#fff',
  fontSize: FontSize.sm
};

const memberName = {
  fontSize: FontSize.md,
  fontFamily:'serif',
  color: Color.gray
};

export default ContactListRightAnswer;