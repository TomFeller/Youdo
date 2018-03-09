class FinalScore extends React.Component {
  render() {
    const groupName = localStorage.groupname,
      minutes = this.props.location.gameMinutes,
      seconds = this.props.location.gameSeconds,
      clues = localStorage.clue,
      totalMinutes = parseInt(minutes) + parseInt(clues * 5);

    return (
      <div id='finalScore'>
        <h2>כל הכבוד קבוצת <span style={{color: '#ff0000'}}>{groupName}</span></h2>
        <h3>פיצחתם את התעלומה!</h3>
        <h3>זמן המשחק שלכם הוא: </h3>
        <p>דקות {this.props.location.gameMinutes}</p>
        <p>שניות {seconds}</p>
        <p>{clues} רמזים = {clues * 5} דקות</p>
        <h3>זמן משוקלל:</h3>
        <p>{totalMinutes} דקות ו-{seconds} שניות</p>
        <p>נתראה בהרפתקאה הבאה</p>
        <input type='button' value='בקרו באתר שלנו'/>
      </div>
    )
  }
}

export default FinalScore;