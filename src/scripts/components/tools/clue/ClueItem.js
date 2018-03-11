import {Link} from 'react-router-dom';
import classNames from 'classnames';
import DataStore from 'flux/stores/DataStore.js';
import {Color, Gutter, TitleTop, Label, TextBoxWarning} from '../../../components/styles/MainStyle.js'

class ClueItem extends React.Component {
  render() {
    localStorage.clue++;
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
          <TextBoxWarning style={{marginTop: '10px'}}>
            <Link to={{pathname: '/tools', isTimerRunning: true}}>חזרה</Link>
          </TextBoxWarning>
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
    padding: Gutter.def,
    marginBottom: Gutter.lg
  };

export default ClueItem;