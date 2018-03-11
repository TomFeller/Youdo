import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
import {VBox, HBox} from 'react-stylesheet';
import {Input, TextBox} from '../components/styles/MainStyle.js'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.updateGroupName = this.updateGroupName.bind(this);
    this.state = {
      groupName: ''
    };
    localStorage.groupname = this.state.groupName;
  }

  updateGroupName() {
    this.setState({
      groupName: this.textInput.value
    });
    localStorage.groupname = this.textInput.value;

  }

  render() {
    let pageData = DataStore.getPageBySlug('home');
    localStorage.clue = 0;
    localStorage.gameMinutes = '00';
    localStorage.gameSeconds = '00';
    localStorage.groupname = this.state.groupName;
    return (
      <div>
        <h1 style={{textAlign: 'center', margin: 0}}>{!pageData.title ? 'ברוכים הבאים' : pageData.title.rendered}</h1>
        <VBox alignItems='center'>
          <h2>שם הקבוצה: {this.state.groupName}</h2>
          <Input>
          <input id='groupName'
                 type='text'
                 className='groupName'
                 placeholder='?????'
                 ref={(input) => this.textInput = input}
                 onChange={this.updateGroupName}/>
            </Input>
          <TextBox>
            <Link key={'tools'}
                  to={{pathname: '/tools'}} >
              המשך
            </Link>
          </TextBox>
        </VBox>
      </div>
    );
  }
}

export default Home;