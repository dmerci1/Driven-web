import React, { Component } from 'react';
import { connect } from 'react-redux';
import cuid from 'cuid';
import { Grid, Button } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from './EventForm';
import { createEvent, editEvent, deleteEvent } from'../../actions/EventActions';

const mapState = (state) => ({
  events: state.events
})

const eventActions = {
  createEvent,
  editEvent,
  deleteEvent
}
class EventDash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      selectedEvent: null
    }

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleUpdateEvent = this.handleUpdateEvent.bind(this);
  }

  openForm() {
    this.setState({
      selectedEvent: null,
      isOpen: true
    })
  }

  closeForm() {
    this.setState({
      isOpen: false
    })
  }

  handleUpdateEvent(updatedEvent) {
    this.props.editEvent(updatedEvent)
    this.setState({
      isOpen: false,
      selectedEven: null
    })
  }

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  }

  createEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.PhotoURL ='../assets.png';
    this.props.createEvent(newEvent);
    this.setState({
      isOpen: false
    })
  }

  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId);
  };

render() {
  const {selectedEvent} = this.state;
  const {events} = this.props;
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          deleteEvent={this.handleDeleteEvent}
          onEventOpen={this.handleOpenEvent}
          events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
      <Button onClick={this.openForm} positive content='Create Event' />
      {this.state.isOpen &&
        <EventForm updatedEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.createEvent} closeForm={this.closeForm} />
      }
      </Grid.Column>
    </Grid>
  );
}
}

export default connect(mapState, eventActions)(EventDash);
