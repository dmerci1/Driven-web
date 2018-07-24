import React, { Component } from 'react';
import { connect } from 'react-redux';
import cuid from 'cuid';
import { Grid, Button } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from './EventForm';
import { createEvent, editEvent, deleteEvent } from'../../actions/EventActions';
import Spinner from '../reuseables/Spinner';

const mapState = (state) => ({
  events: state.events,
  loading: state.async.loading
});

const actions = {
  deleteEvent
};
class EventDash extends Component {
  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId);
  };

render() {
  const {events, loading} = this.props;
  if (loading) return <Spinner />
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          deleteEvent={this.handleDeleteEvent}
          events={events} />
      </Grid.Column>
      <Grid.Column width={6} />
    </Grid>
  );
}

}
export default connect(mapState, actions)(EventDash);
