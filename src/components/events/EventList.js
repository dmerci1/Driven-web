import React, { Component } from 'react';
import EventItems from './EventItems';
import { Container } from 'semantic-ui-react';

class EventList extends Component {
  render() {
    const {events, onEventOpen, deleteEvent} = this.props;
    return (
      <div>
        <h1  className="nav">Event List</h1>
        {events.map((event) => (
          <EventItems key={event.id}
           event={event}
          onEventOpen={onEventOpen}
          deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
