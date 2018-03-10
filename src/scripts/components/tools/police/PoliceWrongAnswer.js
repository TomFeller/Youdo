import DataStore from 'flux/stores/DataStore.js'

class PoliceWrongAnswer extends React.Component {
  render() {
    let pageData = DataStore.getPageBySlug('policewronganswer');

    const answer = this.props.userInput;
    return (
      <div id='wrongAnswer'>
        {answer}
        <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}}/>
      </div>
    )
  }
}

export default PoliceWrongAnswer;