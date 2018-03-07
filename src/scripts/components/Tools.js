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
    const groupName = this.props.location.groupName;
    let toolData = DataStore.getAllPosts();


    return (
      <div id='tools' className='tools-wrapper'>
        <h2 className='tools-content'>שם הקבוצה: {groupName}</h2>
        {
          toolData.map((post, i) => {
            return (
              <div key={i}
                   id={'tool-' + post.id}
                   className={classNames(
                     'tool',
                     'tool-' + post.slug)}>
                <Link to={{
                  pathname: '/' + post.slug,
                  groupName: groupName
                }}>
                  <h3>{post.title.rendered}</h3>
                </Link>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Tools;