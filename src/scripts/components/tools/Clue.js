import DataStore from 'flux/stores/DataStore.js';
import ClueVerify from './clue/ClueVerify.js';

class Clue extends React.Component {

  constructor(props) {
    super(props)
    this.submitNumberInput = this.submitNumberInput.bind(this);
    this.state = ({
      active: false,
      number: ''
    });
  }

  submitNumberInput() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
    this.setState({
      active: true,
      number: this.textInput.value
    });
  }

  render() {
    let postData = DataStore.getPostBySlug('clue');
    if (this.state.active) {
      return (
        <ClueVerify number={this.state.number}/>
      )
    } else {
      return (
        <div id='clue' className='clue'>
          <h1 className='text-title'>{postData.title.rendered}</h1>
          <div className='text-content' dangerouslySetInnerHTML={{__html: postData.excerpt.rendered}}/>
          <input type="text"
                 ref={(input) => this.textInput = input}/>
          <input type="button"
                 value="Focus the text input"
                 onClick={this.submitNumberInput}/>
        </div>
      );
    }
  }
}


export default Clue;
