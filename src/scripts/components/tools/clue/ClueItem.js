import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {VBox, HBox} from 'react-stylesheet';
import DataStore from 'flux/stores/DataStore.js';
import {Color, Gutter, FontSize, TitleTop, TextBox, TextBoxWarning} from '../../../components/styles/MainStyle.js'

class ClueItem extends React.Component {

  componentDidMount() {
    localStorage.clue++;
  }

  render() {
    const {id} = this.props,
      clue = DataStore.getPostBySlug('clue-' + id);

    return (
      <div id={'clueItem-' + id}
           className={classNames(
             'clueItem',
             'clueItem-' + {id})}
           style={clueItem}>
        <div style={titleCover}>
          <TitleTop style={{marginBottom: '4rem'}}>{clue.title.rendered}</TitleTop>
        </div>
        <div style={{padding: `0 ${Gutter.lg}`}}>
          <div style={clueContent} dangerouslySetInnerHTML={{__html: clue.content.rendered}}/>
          <HBox>
            <TextBoxWarning style={{marginLeft: Gutter.sm}}>
              <Link to={{pathname: '/clue', anotherClue: true}}>רמז נוסף</Link>
            </TextBoxWarning>
            <TextBox style={{marginRight: Gutter.sm}}>
              <Link to={{pathname: '/tools', isTimerRunning: true}}>המשך</Link>
            </TextBox>
          </HBox>
        </div>
      </div>
    )
  }
}

const
  titleCover = {
    width: '100%',
    backgroundColor: Color.background,
    padding: `0 ${Gutter.lg}`,
  },
  clueItem = {
    height: '100vh',
    color: Color.blue,
    fontSize: '2rem',
    zIndex: '3',
    position: 'relative'
  },
  clueContent = {
    borderTop: '.3rem solid ' + Color.blue,
    borderBottom: '.3rem solid ' + Color.blue,
    marginBottom: Gutter.lg,
    overflow: 'hidden',
    fontSize: FontSize.lg
  };

export default ClueItem;