import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
import classNames from 'classnames';

class Tools extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: DataStore.getAllPosts()
    };
  }

  render() {
    let archiveData = DataStore.getAllPosts(),
      getArchivePosts = archiveData.map((post, i) => {
        return (
          <Link to={'/' + post.slug}>
            <div key={i}
                 className={classNames(
                   'post',
                   'post-' + post.id,
                   'post-' + post.slug)}>
              <h3>{post.title.rendered}</h3>
            </div>
          </Link>
        );
      });

    return (
      <div id='archive' className='archive'>
        <h2 className='archive-title'>Archive template</h2>
        <div className='archive-content'>{getArchivePosts}</div>
      </div>
    );
  }
}

export default Tools;