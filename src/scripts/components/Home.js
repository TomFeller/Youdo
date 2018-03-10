import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';

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
    localStorage.gameMinutes = '00';
    localStorage.gameSeconds = '00';
    return (
      <div>
        <h1>{!pageData.title ? 'ברוכים הבאים' : pageData.title.rendered}</h1>
        <h2>שם הקבוצה</h2>
        <input id='groupName'
               type='text'
               className='groupName'
               placeholder='?????'
               ref={(input) => this.textInput = input}
               onChange={this.updateGroupName}/>
        <Link key={'tools'}
              to='/tools'
              style={{marginRight: '10px'}}>
          המשך
        </Link>
      </div>
    );
  }
}

export default Home;