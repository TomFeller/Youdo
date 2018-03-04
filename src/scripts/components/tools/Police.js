import DataStore from 'flux/stores/DataStore.js'

class Police extends React.Component {
  render() {
    let postData = DataStore.getPostBySlug('police');
    console.log(postData)
    return (
      <div>
        <h2>Timerblabla</h2>
        <h1>{postData.title.rendered}</h1>

        <div dangerouslySetInnerHTML={{__html: postData.excerpt.rendered}} />
        <div>{postData.text}</div>
      </div>
    );
  }
}

export default Police;
