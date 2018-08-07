import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDash from './components/events/Event_Dashboard';
import EventForm from './components/events/EventForm';
import SettingsDashboard from './components/settings/SettingsDashboard';
import UserDashboard from './components/users/UserDashboard';
import UserProfile from './components/users/UserProfile';
import EventDetails from './components/events/EventDetails/DetailsPage';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ModalManager from './components/modals/ModalManager';


class App extends Component {
  render() {
    return (
      <div>
        <ModalManager />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path='/events' component={EventDash} />
                  <Route path='/event/:id' component={EventDetails} />
                  <Route path='/people' component={UserDashboard} />
                  <Route path='/profile/:id' component={UserProfile} />
                  <Route path='/manage/:id' component={EventForm} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path='/createEvent' component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
