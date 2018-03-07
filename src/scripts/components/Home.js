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
  }

  render() {
    let pageData = DataStore.getPageBySlug('home');
    return (
      <div>
        <h1>{pageData.title.rendered}</h1>
        <h2>שם הקבוצה: {this.state.groupName}</h2>
        <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}}/>
        <input id='groupName'
               type='text'
               className='groupName'
               placeholder='שם הקבוצה'
               ref={(input) => this.textInput = input}
               onChange={this.updateGroupName}/>
        <Link key={'tools'}
              to={{
                pathname: "/tools",
                groupName: this.state.groupName
              }}
              style={{marginRight: '10px'}}>
          שלח
        </Link>
      </div>
    );
  }
}

export default Home;