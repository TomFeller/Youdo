class PoliceWrongAnswer extends React.Component {
  render() {
    const answer = this.props.userInput;
    return (
      <div id='wrongAnswer'>
        <h3>תשובתכם התקבלה.
          עדכון מיחידת המודיעין:
          טעות בזיהוי
        </h3>
      </div>
    )
  }
}

export default PoliceWrongAnswer;