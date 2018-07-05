import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventDash from './components/Event_Dashboard';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <h1>Welcome to Social Sphere</h1>
          <EventDash />
        </Container>
      </div>
    );
  }
}

export default App;
