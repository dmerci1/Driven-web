import React, { Component } from 'react';
import EventItems from './EventItems';

class EventList extends Component {
  render() {
    const {events, deleteEvent} = this.props;
    return (
      <div>
        <h1  className="nav">Event List</h1>
        {events && events.map((event) => (
          <EventItems
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
