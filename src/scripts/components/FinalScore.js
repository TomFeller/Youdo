import {VBox, HBox} from 'react-stylesheet';
import {Color, Gutter, TitleTop, Label, TextBoxWarning} from '../components/styles/MainStyle.js'

class FinalScore extends React.Component {
  render() {
    const groupName = localStorage.groupname,
      minutes = this.props.location.gameMinutes,
      seconds = this.props.location.gameSeconds,
      clues = localStorage.clue,
      totalMinutes = parseInt(minutes) + parseInt(clues * 5);

    return (
      <div id='finalScore'>
        <VBox alignItems='center'>
          <Label>כל הכבוד קבוצת <span style={{color: '#ff0000'}}>{groupName}</span></Label>
          <Label>פיצחתם את התעלומה!</Label>
          <Label>זמן המשחק שלכם הוא: </Label>
          <p>{this.props.location.gameMinutes} דקות ו- {seconds} שניות</p>
          <p>{clues} רמזים = {clues * 5} דקות</p>
          <Label>זמן משוקלל:</Label>
          <p>{totalMinutes} דקות ו-{seconds} שניות</p>
          <p>נתראה בהרפתקאה הבאה</p>
          <input type='button' value='בקרו באתר שלנו'/>
        </VBox>
      </div>
    )
  }
}

export default FinalScore;