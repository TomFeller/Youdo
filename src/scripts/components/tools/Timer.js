import DataStore from 'flux/stores/DataStore.js'

class Timer extends React.Component {
  render() {
    let postData = DataStore.getPostBySlug('timer');

    return (
      <div id='Timer' className='timer'>
        <h2>Timer</h2>
        <h1>{postData.title.rendered}</h1>

        <div dangerouslySetInnerHTML={{__html: postData.excerpt.rendered}} />
        <div>{postData.text}</div>
      </div>
    );
  }
}

export default Timer;
