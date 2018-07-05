import React, { Component } from 'react';
import EventItems from './EventItems';
import { Container } from 'semantic-ui-react';

class EventList extends Component {
  render() {
    return (
      <div>
        <h1>Event List</h1>
        <EventItems />
        <EventItems />
        <EventItems />
      </div>
    );
  }
}

export default EventList;
