import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import EventDash from './components/events/Event_Dashboard';
import EventForm from './components/events/EventForm';
import SettingsDashboard from './components/settings/SettingsDashboard';
import UserDashboard from './components/users/UserDashboard';
import UserDetails from './components/users/UserDetails';
import EventDetails from './components/events/EventDetails';
import Home from './components/Home';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <div>
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
                  <Route path='/events/:id' component={EventDetails} />
                  <Route path='/people' component={UserDashboard} />
                  <Route path='/peaple/:id' component={UserDetails} />
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
