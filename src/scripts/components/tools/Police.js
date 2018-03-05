import DataStore from 'flux/stores/DataStore.js';

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

  render() {
    let postData = DataStore.getPostBySlug('police');
    if (this.state.isValid) {
      return (
        <div id='police' className='police'>
          <h2>Police Icon</h2>
          <PoliceInsertName password={this.state.passwordNumber}
                            nameAnswer='מאיר דיזנגוף'/>
        </div>
      )
    } else {
      return (
        <div id='police' className='police'>
          <h2>Police Icon</h2>
          <h1>{postData.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{__html: postData.excerpt.rendered}}/>
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

class PoliceInsertName extends React.Component {
  constructor(props) {
    super(props);
    this.confirmMessage = this.confirmMessage.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);

    this.state = {
      confirm: true,
      guess: ''
    }
  }

  confirmMessage() {
    this.setState({
      confirm: false
    })
  }

  checkAnswer() {
    this.setState({
      guess: this.textInput.value
    });
  }

  render() {
    const answer = this.props.nameAnswer;
    return (
      <div>
        {this.state.confirm &&
        <div className='policeWarning'>
          תשובה לא נכונה תוסיף 3 דקות לזמן הסופי.
          <input type='button'
                 value='הבנתי'
                 onClick={this.confirmMessage}
          />
        </div>
        }
        <div className='guessName'>
          {!this.state.confirm && (this.state.guess !== answer) &&
          <div>
            <h3>שם הנעדר:</h3>
            <input type='text'
                   disabled={this.state.confirm}
                   ref={(input) => this.textInput = input}/>
            <input type='button'
                   disabled={this.state.confirm}
                   onClick={this.checkAnswer}
                   value={'שלחי'}/>
          </div>
          }
          {(this.state.guess === answer) &&
          <div id='rightAnswer'>
            <h3>{this.state.guess} is the right answer</h3>
          </div>
          }
        </div>
      </div>
    )
  }
}

export default Police;
