import DataStore from 'flux/stores/DataStore.js';

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

class ClueVerify extends React.Component {
  constructor(props) {
    super(props);
    this.understand = this.understand.bind(this);
    this.state = ({
      showClue: false,
      number: this.props.number
    })
  }

  understand() {
    this.setState({
      showClue: true
    })
  }

  render() {
    console.log(this.state.showClue);
    if (this.state.showClue) {
      return (
        <div>{this.state.number}</div>
      )
    }
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: `נתקעתם? לא לא יודעים איך להמשיך? <br>עוד רגע תוכלו לקבל רמז`}}/>
        <div dangerouslySetInnerHTML={{__html: `זכרו: <br> כל רמז יוסיף 5 דקות לזמן המשחק הסופי`}}/>
        <input type='button' value='הבנתי' onClick={this.understand}/>
      </div>
    )
  }
}

export default Clue;
