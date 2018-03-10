import DataStore from 'flux/stores/DataStore.js';
import ClueItem from './clue/ClueItem.js';
import Timer from './Timer.js';
import WarningMessage from './WarningMessage.js';

class Clue extends React.Component {

  constructor(props) {
    super(props);
    this.submitNumberInput = this.submitNumberInput.bind(this);
    this.state = ({
      submit: false,
      number: ''
    });
  }

  submitNumberInput() {
    this.setState({
      submit: true,
      number: this.textInput.value
    });
  }

  render() {
    let postData = DataStore.getPostBySlug('clue');
    if (this.state.submit) {
      return (
        <ClueItem id={this.state.number} />
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
