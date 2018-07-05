import React, { Component } from 'react';
import EventItems from './EventItems';
import { Container } from 'semantic-ui-react';

class EventList extends Component {
  render() {
    const {events} = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {events.map((event) => (
          <EventItems key={event.id} event={event}/>
        ))}
      </div>
    );
  }
}

export default EventList;
