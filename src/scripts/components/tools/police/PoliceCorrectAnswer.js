import {Link} from 'react-router-dom';

class PoliceCorrectAnswer extends React.Component {
  render() {
    const answer = this.props.userInput;
    return (
      <div id='correctAnswer'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0FdNlhZAYBE"></iframe>
        <h3>{answer} is the right answer</h3>
        <Link to={{
          pathname:'/finalscore',
          groupName: this.props.groupName
        }}>צפו בלוח התוצאות</Link>
      </div>
    )
  }
}

export default PoliceCorrectAnswer;