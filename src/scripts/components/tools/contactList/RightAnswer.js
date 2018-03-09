class RightAnswer extends React.Component {
  render() {
    const member = this.props.location.member.title;

    return (
      <div id='member' className='member'>
        <div className='member-details'>
          <div className='member-icon'>ICON</div>
          <div className='member-name'>{member}</div>
          <div style={flex}>
            <p>050-363-6419</p> | <p>ישראל</p>
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
  display: 'flex'
}

export default RightAnswer;