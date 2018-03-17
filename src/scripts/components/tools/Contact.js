import {Link} from 'react-router-dom';
import {FontSize, Color, Gutter} from '../../components/styles/MainStyle.js';
import DataStore from 'flux/stores/DataStore.js';
import {VBox, HBox} from 'react-stylesheet';

class ContactList extends React.Component {
  constructor(props) {
    super(props);

    this.contactlistEndPoint = 'http://127.0.0.1:8082/wordpress/wp-json/wp-api-menus/v2/menus/3';
    this.compare = this.compare.bind(this);

    this.state = {
      contactList: []
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

  compare(a, b) {
    return a.title < b.title ? -1 : 1
  }

  render() {
    const letters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];

    let pageData = DataStore.getPostBySlug('contactlist');
    console.log(this.state.contactList);
    this.state.contactList.sort(this.compare);
    return (
      <div style={contactList}>
        <HBox>
          <div className='contact-list' style={{width: '100%', marginLeft: Gutter.def}}>
            {
              this.state.contactList.map((member, i) => {
                let isCorrect = (member.url == 'http://1') ? 1 : 0;
                return (
                  <div className='contact-list__item' key={i}>
                    <HBox alignItems='center'>
                      <span>O</span>
                      <Link style={listItem} to={{
                        pathname: 'contactlistrightanswer',
                        member: member,
                        isCorrect: isCorrect
                      }}>
                        <p style={{margin: '.5rem 0'}}>{member.title}</p>
                      </Link>
                    </HBox>
                  </div>
                );
              })
            }
          </div>
          <div style={lettersWrapper}>
            {letters.map((letter, i) => {
              return (
                <div key={i}
                     style={letterItem}>{letter}</div>
              )
            })}
          </div>
        </HBox>
      </div>
    );
  }
}

const
  contactList = {
    padding:Gutter.def,
    backgroundColor: Color.background,
    zIndex:'3',
    height: '100vh',
    overflow: 'scroll'
  },
  listItem = {
    display: 'block',
    width: '100%',
    fontSize: FontSize.md,
    color: Color.black,
    textDecoration: 'none',
    marginRight: Gutter.def,
    borderBottom: `.1rem solid ${Color.black}`
  },
  letterItem = {
    color: Color.blue
  },
  lettersWrapper = {
    position: 'fixed',left: Gutter.def
  };
export default ContactList;

