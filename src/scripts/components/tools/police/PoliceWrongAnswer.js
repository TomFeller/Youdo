import {Link} from 'react-router-dom';
import DataStore from '../../../flux/stores/DataStore.js'
import {TextBox, TextBoxWarning} from '../../styles/MainStyle.js';

class PoliceWrongAnswer extends React.Component {
  render() {
    const
      pageData = DataStore.getPageBySlug('policewronganswer'),
      answer = this.props.location.userInput;

    return (
      <div id='wrongAnswer'>
        {answer}
        <TextBox>
          <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}}/>
        </TextBox>
        <TextBoxWarning>
          <Link to='/police'>לחצו לניסיון נוסף</Link>
        </TextBoxWarning>
      </div>
    )
  }
}

export default PoliceWrongAnswer;