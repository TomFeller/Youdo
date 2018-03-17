import {Link} from 'react-router-dom';
import {VBox, HBox} from 'react-stylesheet';
import {TextBox, PageGutter, Gutter, LabelSmall, TextBoxWarning} from '../../styles/MainStyle.js';
import DataStore from '../../../flux/stores/DataStore.js'


class PoliceWrongAnswer extends React.Component {
  render() {
    localStorage.policeGuess++;
    const
      pageData = DataStore.getPageBySlug('policewronganswer'),
      answer = this.props.location.userInput,
      policeIconUrl = 'http://127.0.0.1:8082/wordpress/wp-content/uploads/2018/03/police-logo.png',
      userUrl = 'http://127.0.0.1:8082/wordpress/wp-content/uploads/2018/03/icon-face.png'
    return (
      <div id='wrongAnswer'
           style={{padding: PageGutter}}>
        <VBox>
          <HBox justifyContent='center'>
            <img src={policeIconUrl}/>
          </HBox>
          <div style={{margin: `2rem 0`}}>
            <TextBox style={{padding: Gutter.def, marginBottom: Gutter.def}}>
              <LabelSmall dangerouslySetInnerHTML={{__html: pageData.content.rendered}}/>
            </TextBox>
            <TextBoxWarning>
              <Link to='/police'>לחצו לניסיון נוסף</Link>
            </TextBoxWarning>
          </div>
          <HBox justifyContent='center'>
            <img src={userUrl}
                 style={{display: 'block', height: '15rem'}}/>
          </HBox>
        </VBox>
      </div>
    )
  }
}

export default PoliceWrongAnswer;