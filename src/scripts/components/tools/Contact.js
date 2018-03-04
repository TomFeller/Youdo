import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.contactlistEndPoint = 'http://127.0.0.1:8082/wordpress/wp-json/wp-api-menus/v2/menus/3';
    this.state = {
      contactList: [],
    }
  }

  componentDidMount() {
    fetch(this.contactlistEndPoint)
      .then(results => {
        return results.json();
      }).then(data => {
      let contactList = data.items;
      this.setState({contactList: contactList});
    });
  }

  render() {
    let pageData = DataStore.getPostBySlug('contactlist');
    return (
      <div>
        <h1>{pageData.title.rendered}</h1>

        <div className='contact-list'>
          {
            this.state.contactList.map((member, i) => {
              console.log(member.url);
              let memberPageUrl = member.url == 'http://1' ? 'rightanswer' : 'wronganswer';
              return (
                <div className='contact-list__item' key={i}>
                  <Link to={memberPageUrl}>
                    <div>{member.title}</div>
                    <div>{member.id}</div>
                  </Link>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ContactList;
