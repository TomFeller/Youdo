import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.updateGroupName = this.updateGroupName.bind(this);
    this.state = {
      groupName: ''
    }
  }

  updateGroupName() {
    this.setState({
      groupName: this.textInput.value
    });
    localStorage.groupname = this.textInput.value;
  }

  render() {
    localStorage.clue = 0;
    let pageData = DataStore.getPageBySlug('home');
    let groupName = localStorage.groupname;

    return (
      <div>
        <h1>{pageData.title.rendered}</h1>
        <h2>שם הקבוצה: {groupName}</h2>
        <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}}/>
        <input id='groupName'
               type='text'
               className='groupName'
               placeholder='שם הקבוצה'
               ref={(input) => this.textInput = input}
               onChange={this.updateGroupName}/>
        <Link key={'tools'}
              to='/tools'
              style={{marginRight: '10px'}}>
          שלח
        </Link>
      </div>
    );
  }
}

export default Home;