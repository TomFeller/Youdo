import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class PoliceWrongAnswer extends React.Component {
  render() {
    const
      pageData = DataStore.getPageBySlug('policewronganswer'),
      answer = this.props.location.userInput;

    return (
      <div id='wrongAnswer'>
        {answer}
        <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}}/>
        <Link to='/police'>לחצו לניסיון נוסף</Link>
      </div>
    )
  }
}

export default PoliceWrongAnswer;