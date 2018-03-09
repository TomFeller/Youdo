class RightAnswer extends React.Component {
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
    const member = this.props.location.member.title;
    let phoneNumber = this.getRandomPhoneNumber();
    return (
      <div id='member' className='member'>
        <div className='member-details'>
          <div className='member-icon'>ICON</div>
          <div className='member-name'>{member}</div>
          <div style={flex}>
            <p>{phoneNumber}</p> | <p>ישראל</p>
          </div>
          <p>מחייג</p>
        </div>
        <div className='member-panel'>
          PANEL
        </div>
      </div>
    )
  }
}

const flex = {
  display: 'flex',
  alignItems: 'center'
}

export default RightAnswer;