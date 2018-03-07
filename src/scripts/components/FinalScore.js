class FinalScore extends React.Component {
  render() {
    const groupName = this.props.location.groupName;
    console.log(groupName);
    return (
      <div id='finalScore'>
        <h2>כל הכבוד קבוצת <span>{groupName}</span></h2>
        <h3>פיצחתם את התעלומה!</h3>
        <h3>זמן המשחק שלכם הוא: </h3>
        <p>4 דקות ו15 שניות</p>
        <p>2 רמזים = 10 דקות</p>
        <h3>זמן משוקלל:</h3>
        <p>53 דקות ו-15 שניות</p>
        <p>נתראה בהרפתקאה הבאה</p>
        <input type='button' value='בקרו באתר שלנו'/>
      </div>
    )
  }
}

export default FinalScore;