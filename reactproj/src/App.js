import React from 'react';
import Resources from './pages/Resources';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import ResourceNew from './pages/ResourceNew';
import About from './pages/About';
import ResourceDetails from './pages/ResourceDetails';
import SettingsProvider from './context/SettingsProvider';




const App = () => {


  return (
    <SettingsProvider>
      {
        settings =>
      <div className={`resource-app  ${settings.theme}`}>
        <div className="container">
          <Router>
          {/*This is where it can be share with all paths, the same content in each page. */}
            <Header></Header>
            <Switch>
              {/**the exact is for the path so, to match only the path that has the empty slash. so don't need to change the order of the paths
               * and each page will be unquie path.
               */}
              <Route path='/' exact>
              <Resources></Resources>
              </Route>
              <Route path='/resources/new'>
                <ResourceNew></ResourceNew>
              </Route>
              {/*:id is to show in all path ids the same info. Also it will help resourcedetails params to identify which id we are refering to. */}
              <Route path='/resources/:id'>
                <ResourceDetails></ResourceDetails>
              </Route>
              <Route path='/about'>
              <About></About>
              </Route>
            </Switch>
          </Router>
          </div>
      </div>
      }

    </SettingsProvider>

  );
}

export default App;
