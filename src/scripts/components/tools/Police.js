import DataStore from 'flux/stores/DataStore.js';
import PoliceInsertName from './police/PoliceInsertName.js';

class Police extends React.Component {
  constructor(props) {
    super(props)
    this.submitNumberInput = this.submitNumberInput.bind(this);
    this.state = ({
      isValid: false,
      passwordNumber: ''
    });

  }

  submitNumberInput() {
    this.textInput.focus();
    this.setState({
      isValid: true,
      passwordNumber: this.textInput.value
    });
  }

  /* TODO: make 'nameAnswer' dynamic from wordpress */
  render() {
    if (this.state.isValid) {
      return (
        <div id='police' className='police'>
          <h2>{localStorage.groupname}</h2>
          <h2>Police Icon</h2>
          <PoliceInsertName password={this.state.passwordNumber}
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
