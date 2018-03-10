import DataStore from 'flux/stores/DataStore.js';
import ClueItem from './clue/ClueItem.js';
import WarningMessage from './WarningMessage.js';

class Clue extends React.Component {

  constructor(props) {
    super(props);
    this.submitNumberInput = this.submitNumberInput.bind(this);
    this.state = ({
      number: '',
      isValid: false
    });
  }

  submitNumberInput() {
    this.setState({
      number: this.textInput.value,
      isValid: (this.textInput.value == '1001' ||
      this.textInput.value == '1002' ||
      this.textInput.value == '1003' ||
      this.textInput.value == '1004' ||
      this.textInput.value == '1005' ||
      this.textInput.value == '1006' ||
      this.textInput.value == '1007' ) ? true : '0'
    });
  }

  render() {
    let postData = DataStore.getPostBySlug('clue');

    if (this.state.isValid == true) {
      return (
        <ClueItem id={this.state.number}/>
      )
    } else {
      return (
        <div id='clue' className='clue'>
          <WarningMessage content='זכרו: כל רמז יוסיף לכם 5 דקות לזמן המשחק הסופי.'
                          tag={'clue-inner'}
                          direction={'bottom'}/>
          <div className='text-content' dangerouslySetInnerHTML={{__html: postData.excerpt.rendered}}/>
          <div>
            <input type="text"
                   ref={(input) => this.textInput = input}/>
          </div>
          <div>
            <input type="button"
                   value="Focus the text input"
                   onClick={this.submitNumberInput}/>
          </div>
        </div>
      );
    }
  }
}


export default Clue;
