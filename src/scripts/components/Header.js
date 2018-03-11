import {Link} from 'react-router-dom';
import Timer              from './tools/Timer.js';
import DataStore from 'flux/stores/DataStore.js'

class Header extends React.Component {

  render() {

    return (

      <header id="site-header" className="site-header">
        <h1>שם הקבוצה: {localStorage.groupname}</h1>
        <Timer />
      </header>
    );
  }
}

export default Header;


// let allPages = DataStore.getAllPages();
// allPages = _.sortBy(allPages, [function (page) {
//   return page.menu_order;
// }]); // Sort pages by order

// < Link to="/" style={{marginRight: '10px'}}>Home</Link>
// {allPages.map((page) => {
//   if (page.slug != 'home') {
//     return (
//       <Link
//         key={page.id}
//         to={`/${page.slug}`}
//         style={{marginRight: '10px'}}
//       >
//         {page.title.rendered}
//       </Link>
//     )
//   }
// })}