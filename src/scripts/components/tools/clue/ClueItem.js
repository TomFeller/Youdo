import classNames from 'classnames';
import DataStore from 'flux/stores/DataStore.js';

class ClueItem extends React.Component {
  render() {
    const {id} = this.props,
      clue = DataStore.getPostBySlug('clue-' + id);

    return (
      <div id={'clueItem-' + id}
           className={classNames(
             'clueItem',
             'clueItem-' + {id})}>
        <h2 style={{textAlign: 'center'}}>{clue.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{__html: clue.content.rendered}}/>
      </div>
    )
  }
}

export default ClueItem;