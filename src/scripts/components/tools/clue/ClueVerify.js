class ClueVerify extends React.Component {
  constructor(props) {
    super(props);
    this.verify = this.verify.bind(this);
    this.state = ({
      showClue: false,
      number: this.props.number
    })
  }

  verify() {
    localStorage.clue++;
    this.setState({
      showClue: true
    })
  }

  render() {
    if (this.state.showClue) {
      return (
        <div>{this.state.number}</div>
      )
    }
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: `נתקעתם? לא לא יודעים איך להמשיך? <br>עוד רגע תוכלו לקבל רמז`}}/>
        <div dangerouslySetInnerHTML={{__html: `זכרו: <br> כל רמז יוסיף 5 דקות לזמן המשחק הסופי`}}/>
        <input type='button' value='הבנתי' onClick={this.verify}/>
      </div>
    )
  }
}

export default ClueVerify;