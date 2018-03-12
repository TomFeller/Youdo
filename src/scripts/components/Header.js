import {Gutter} from '../components/styles/MainStyle.js';
import Timer              from './tools/Timer.js';
import {VBox, HBox} from 'react-stylesheet';

class Header extends React.Component {
  render() {

    return (
      <header id="site-header" className="site-header" style={header}>
        <HBox justifyContent='space-between'>
          <div>חזרה</div>
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