import {render}               from 'react-dom';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {App}                  from 'components/styles/MainStyle.js';
import Clue                   from 'components/tools/Clue.js';
import ContactList            from 'components/tools/Contact.js';
import ContactListRightAnswer from 'components/tools/contactList/ContactListRightAnswer.js';
import ContactListWrongAnswer from 'components/tools/contactList/ContactListWrongAnswer.js';
import DataActions            from 'flux/actions/DataActions.js';
import FinalScore             from 'components/FinalScore.js';
import GeneralSettings        from 'components/GeneralSettings.js';
import Header                 from 'components/Header.js';
import Home                   from 'components/Home.js';
import Police                 from 'components/tools/Police.js';
import PoliceCorrectAnswer    from 'components/tools/police/PoliceCorrectAnswer.js';
import PoliceWrongAnswer      from 'components/tools/police/PoliceWrongAnswer.js';
import Timer                  from 'components/tools/Timer.js';
import Tools                  from 'components/Tools.js';


class AppInitializer {

  templates = {
    'tools': Tools,
    'clue': Clue,
    'timer': Timer,
    'contactlist': ContactList,
    'generalsettings': GeneralSettings,
    'contactlistrightanswer': ContactListRightAnswer,
    'contactlistwronganswer': ContactListWrongAnswer,
    'police': Police,
    'policecorrectanswer': PoliceCorrectAnswer,
    'policewronganswer': PoliceWrongAnswer,
    'finalscore': FinalScore
  };

  buildRoutes(data) {
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
  // TODO: Unlimit the number of pages (now its only 10)
  run() {
    DataActions.getPages((response)=> {
      render(
        <Router>
          <App id='app-wrapper'>
            <Header />
            <Switch>
              <Route path="/"
                     render={(props) => <Home />}
                     exact/>
              {this.buildRoutes(response)}
              <Route render={() => {
                console.log(response);
                return <Redirect {...props} groupName={name} to="/"/>
              }}/>
            </Switch>
          </App>
        </Router>
        , document.getElementById('app')
      );
    });
  }
}

new AppInitializer().run();


// <Header groupName={name} />