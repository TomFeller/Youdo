import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {VBox, HBox} from 'react-stylesheet';
import DataStore from 'flux/stores/DataStore.js';
import {Color, Gutter, TitleTop, TextBox, TextBoxWarning} from '../../../components/styles/MainStyle.js'

class ClueItem extends React.Component {
  constructor(props) {
    super(props);

  }

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
        <TitleTop>{clue.title.rendered}</TitleTop>
        <div className='clueItem-content'>
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
  clueItem = {
    height: '100vh',
    color: Color.blue,
    fontSize: '2rem',
    padding: '0 3rem'
  },
  clueContent = {
    borderTop: '.3rem solid ' + Color.blue,
    borderBottom: '.3rem solid ' + Color.blue,
    padding: `${Gutter.def} 0`,
    marginBottom: Gutter.lg,
    overflow: 'hidden'
  };

export default ClueItem;