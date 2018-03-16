import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
import {VBox, HBox, Element} from 'react-stylesheet';
import {Input, TextBox, TitleTop, Color, PageGutter, Label} from '../components/styles/MainStyle.js'
import Logo from './styles/Logo.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.updateGroupName = this.updateGroupName.bind(this);
    this.startGame = this.startGame.bind(this);

    this.state = {
      groupName: '',
      isActive: false
    };
    localStorage.groupname = this.state.groupName;
  }

  startGame() {
    this.setState({
      isActive: true
    })
  }

  updateGroupName() {
    this.setState({
      groupName: this.textInput.value
    });
    localStorage.groupname = this.textInput.value;
  }

  render() {
    let pageData = DataStore.getPageBySlug('home');
    localStorage.clue = 0;
    localStorage.gameMinutes = '00';
    localStorage.gameSeconds = '00';
    localStorage.groupname = this.state.groupName;
    return (
      <VBox justifyContent='space-between'
            height='100vh'
            style={{padding: PageGutter}}
            id='home'>
        <TitleTop style={{
          height: this.state.isActive ? '30vh' : '85vh',
          marginBottom: '0',
          transition: '1s height'
        }}>
          <h1 style={{
            textAlign: 'center',
            margin: 0
          }}>{!pageData.title ? 'ברוכים הבאים' : pageData.title.rendered}</h1>
          {!this.state.isActive &&
          <HBox justifyContent='center'
                alignItems='center'
                onClick={this.startGame}
                style={openningButton}>
            <div style={openningButtonLine}></div>
            <img src='http://127.0.0.1:8082/wordpress/wp-content/uploads/2018/03/arrows.png'
                 width='12px'/>
          </HBox>
          }
        </TitleTop>
        {this.state.isActive &&
        <Element>
          <Label>שם הקבוצה {this.state.groupName}</Label>
          <Input>
            <input id='groupName'
                   type='text'
                   className='groupName'
                   placeholder='?????'
                   ref={(input) => this.textInput = input}
                   onChange={this.updateGroupName}/>
          </Input>
          <TextBox>
            <Link key={'tools'}
                  to={{pathname: this.state.groupName && this.state.groupName != '' ? '/tools' : '/'}}>
              המשך
            </Link>
          </TextBox>
        </Element>
        }
        {this.state.isActive &&
        <Logo />
        }
      </VBox>
    );
  }
}

const openningButton = {
  width: '5rem',
  height: '5rem',
  borderRadius: '50%',
  backgroundColor: Color.orange,
  margin: '0 auto',
  position: 'absolute',
  bottom: '3rem',
  overflow: 'visible'
};

const openningButtonLine = {
  position: 'absolute',
  width: '.7rem',
  height: '5rem',
  backgroundColor: Color.orange,
  top: '-4rem'
}

export default Home;