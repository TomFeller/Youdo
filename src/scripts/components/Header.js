import {Link} from 'react-router-dom';
import {Gutter} from '../components/styles/MainStyle.js';
import Timer              from './tools/Timer.js';
import {VBox, HBox} from 'react-stylesheet';

class Header extends React.Component {
  render() {

    return (
      <header id="site-header" className="site-header" style={header}>
        <HBox justifyContent='space-between'>
          <Link to='/tools'>
            <img src='http://127.0.0.1:8082/wordpress/wp-content/uploads/2018/03/back-btn.png' />
          </Link>
          <Timer />
        </HBox>
      </header>
    );
  }
}

export default Header;

const header = {
  position: 'absolute',
  top: '0',
  right: '0',
  width: '100%',
  padding: Gutter.def
}