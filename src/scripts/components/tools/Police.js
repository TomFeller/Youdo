import DataStore from 'flux/stores/DataStore.js';
import PoliceInsertName from './police/PoliceInsertName.js';

class Police extends React.Component {
  constructor(props) {
    super(props)
    this.submitNumberInput = this.submitNumberInput.bind(this);
    this.state = ({
      isValid: -1,
      userInput: '',
      password: '12345'  //TODO: Get the number from admin
    });

  }

  submitNumberInput() {
    this.textInput.focus();
    this.setState({
      isValid: this.textInput.value == this.state.password ? 1 : 0,
      userInput: this.textInput.value
    });
  }


  /* TODO: make 'nameAnswer' dynamic from wordpress */
  render() {
    if (this.state.isValid == 1) {
      return (
        <div id='police' className='police'>
          <h2>{localStorage.groupname}</h2>
          <h2>Police Icon</h2>
          <PoliceInsertName password={this.state.userInput}
                            nameAnswer='bla'/>
        </div>
      );
    } else {
      return (
        <div id='police' className='police'>
          <h2>Police Icon</h2>
          <h2>{localStorage.groupname}</h2>
          <h3>הכנס סיסמא:</h3>
          <input
            type="number"
            ref={(input) => this.textInput = input}/>
          <span>{this.state.isValid == 0 ? 'סיסמא שגוייה' : ''}</span>
          <input
            type="button"
            value="שלח"
            onClick={this.submitNumberInput}/>
        </div>
      );
    }
  }
}


export default Police;
