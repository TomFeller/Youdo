import {Element, VBox, HBox} from 'react-stylesheet';
import {
  Color,
  Gutter,
  FontSize,
  Radius,
  LabelSmall,
  Label,
  TextBox,
  TextBoxWarning
} from '../components/styles/MainStyle.js'
import Logo from './styles/Logo.js';

class FinalScore extends React.Component {
  render() {
    const groupName = localStorage.groupname,
      minutes = this.props.location.gameMinutes,
      seconds = this.props.location.gameSeconds,
      clues = localStorage.clue,
      totalMinutes = parseInt(minutes) + parseInt(clues * 5);

    return (
      <div id='finalScore'
           style={{padding: Gutter.def}}>
        <VBox alignItems='center'>
          <Label style={{marginBottom: '1rem'}}>כל הכבוד קבוצת</Label>
          <div style={groupNameBox}>
            {groupName}
          </div>
          <Label style={{marginBottom: '1rem'}}>פיצחתם את התעלומה!</Label>
          <div style={detailsBox}>
            <LabelSmall>זמן המשחק שלכם הוא </LabelSmall>
            <TextBoxWarning>
              <button>{this.props.location.gameMinutes} דקות ו- {seconds} שניות</button>
            </TextBoxWarning>
            <Element style={{margin:`${Gutter.def} 0`}}>
              <LabelSmall>{clues} רמזים = {clues * 5} דקות</LabelSmall>
              <LabelSmall>2 תשובות לא נכונות * 3 דקות</LabelSmall>
              <LabelSmall>זמן משוקלל</LabelSmall>
            </Element>
            <TextBoxWarning>
              <button>  {totalMinutes} דקות ו-{seconds} שניות</button>
            </TextBoxWarning>
          </div>
          <TextBox style={{marginTop: Gutter.def}}>
            <button>בקרו באתר שלנו</button>
          </TextBox>
          <Logo/>
        </VBox>
      </div>
    )
  }
}

const groupNameBox = {
  backgroundColor: Color.gray,
  height: '5rem',
  width: '100%',
  borderRadius: Radius,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: FontSize.lg,
  marginBottom: Gutter.def
};

const detailsBox = {
  width: '100%',
  borderTop: '.3rem solid ' + Color.blue,
  borderBottom: '.3rem solid ' + Color.blue,
  padding: `${Gutter.def} ${Gutter.def} 3rem`,
  marginBottom: Gutter.def,
  overflow: 'hidden',
};

export default FinalScore;
