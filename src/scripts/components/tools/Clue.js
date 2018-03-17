import DataStore from 'flux/stores/DataStore.js';
import ClueItem from './clue/ClueItem.js';
import WarningMessage from './WarningMessage.js';
import {Label, Input, TextBox, Gutter} from '../../components/styles/MainStyle.js'

class Clue extends React.Component {

  constructor(props) {
    super(props);
    this.submitNumberInput = this.submitNumberInput.bind(this);
    this.state = ({
      number: '',
      isValid: false,
    });
    this.isAnother = this.isAnother.bind(this);
    localStorage.clueVerified = false;
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

  isAnother() {
    this.setState({
      isValid: false
    });
    this.props.location.anotherClue = false;
  }

  render() {
    if (this.props.location.anotherClue && this.state.isValid) {
      this.isAnother();
    }
    let postData = DataStore.getPostBySlug('clue');

    if (this.state.isValid == true && localStorage.clueVerified == 'true') {
      localStorage.showHeader = '0';
      return (
        <ClueItem id={this.state.number}/>
      )
    } else {
      return (
        <div id='clue' className='clue' style={{padding: `0 ${Gutter.lg}`}}>
          <WarningMessage content='זכרו: כל רמז יוסיף לכם 5 דקות לזמן המשחק הסופי.'
                          tag={'clue-inner'}
                          direction={'top'}
                          width={'14rem'}
                          top='2rem'
                          left='2rem'/>
          <Label className='text-content' dangerouslySetInnerHTML={{__html: postData.excerpt.rendered}}/>
          <Input>
            <input type="text"
                   ref={(input) => this.textInput = input}/>
          </Input>
          <TextBox>
            <button onClick={this.submitNumberInput}>שלח</button>
          </TextBox>
        </div>
      );
    }
  }
}

export default Clue;
