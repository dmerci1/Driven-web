import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventChat from './Chat';
import EventHeader from './Header';
import EventInfo from './Info';
import EventSidebar from './Sidebar';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id)[0];
  }

  return {
    event
  }
}
const EventDetails = ({event}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventHeader event={event} />
        <EventInfo  event={event} />
        <EventChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(EventDetails);
