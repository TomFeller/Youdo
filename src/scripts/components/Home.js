import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.updateGroupName = this.updateGroupName.bind(this);
    this.state = {
      groupName: 'bla'
    }
  }

  updateGroupName(value) {
    this.setState({groupName: value})
  }
  render() {
    let pageData = DataStore.getPageBySlug('home');

    return (
      <div>
        <h1>{pageData.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}}/>
        <input id='groupName'
               type='text'
               className='groupName'
               placeholder='שם הקבוצה' />
        <Link key={'tools'}
              to={'tools'}
              style={{marginRight: '10px'}}>
          שלח
        </Link>
      </div>
    );
  }
}

export default Home;
