import {render}           from 'react-dom';
import DataActions        from 'flux/actions/DataActions.js';

import Header             from 'components/Header.js';
import Home               from 'components/Home.js';
import About              from 'components/About.js';
import Tools              from 'components/Tools.js';
import Clue               from 'components/tools/Clue.js';
import Police             from 'components/tools/Police.js';
import ContactList        from 'components/tools/Contact.js';
import RightAnswer        from 'components/tools/contactList/RightAnswer.js';
import WrongAnswer        from 'components/tools/contactList/WrongAnswer.js';
import Timer              from 'components/tools/Timer.js';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


class AppInitializer {

  templates = {
    'about': About,
    'tools': Tools,
    'contactlist': ContactList,
    'rightanswer': RightAnswer,
    'wronganswer': WrongAnswer,
    'clue': Clue,
    'timer': Timer,
    'police': Police
  };

  buildRoutes(data) {
    this.state = {groupName: 'bla'};
    return data.pages.map((page, i) => {
      return (
        <Route
          key={i}
          component={this.templates[page.slug]}
          path={`/${page.slug}`}
          exact
        />
      )
    });
  }

// TODO: check about getting all posts and pages. Right now, to add new page route you need to add page to show it and the content is in posts section.
  run() {
    DataActions.getPages((response)=> {
      render(
        <Router>
          <div>
            <Header groupName={this.state} />

            <Switch>
              <Route path="/" component={ Home } exact/>

              {this.buildRoutes(response)}
              <Route groupName='bla' render={() => {
                return <Redirect to="/"/>
              }}/>
            </Switch>
          </div>
        </Router>

        , document.getElementById('app')
      );
    });
  }
}

new AppInitializer().run();
