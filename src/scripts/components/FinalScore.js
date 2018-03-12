import {VBox, HBox} from 'react-stylesheet';
import {Color, Gutter, LabelSmall, Label, TextBox, TextBoxWarning} from '../components/styles/MainStyle.js'

class FinalScore extends React.Component {
  render() {
    const groupName = localStorage.groupname,
      minutes = this.props.location.gameMinutes,
      seconds = this.props.location.gameSeconds,
      clues = localStorage.clue,
      totalMinutes = parseInt(minutes) + parseInt(clues * 5);

    return (
      <div id='finalScore' style={{padding: Gutter.lg}}>
        <VBox alignItems='center'>
          <Label>כל הכבוד קבוצת <span style={{color: '#ff0000'}}>{groupName}</span></Label>
          <Label>פיצחתם את התעלומה!</Label>
          <div style={detailsBox}>
            <Label>זמן המשחק שלכם הוא </Label>
            <TextBoxWarning>
              <button>{this.props.location.gameMinutes} דקות ו- {seconds} שניות</button>
            </TextBoxWarning>
            <LabelSmall>{clues} רמזים = {clues * 5} דקות</LabelSmall>
            <LabelSmall>2 תשובות לא נכונות * 3 דקות</LabelSmall>
            <Label>זמן משוקלל</Label>
            <TextBoxWarning>
              <button>  {totalMinutes} דקות ו-{seconds} שניות</button>
            </TextBoxWarning>
          </div>
          <TextBox>
          <button>בקרו באתר שלנו</button>
          </TextBox>
        </VBox>
      </div>
    )
  }
}

export default FinalScore;

const detailsBox = {
  width: '100%',
  borderTop: '.3rem solid ' + Color.blue,
  borderBottom: '.3rem solid ' + Color.blue,
  padding: `${Gutter.def} ${Gutter.lg}`,
  marginBottom: Gutter.lg,
  overflow: 'hidden'
}