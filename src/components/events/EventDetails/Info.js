import React from 'react';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';

const EventInfo = ({event}) => {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="calendar" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{event.date}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="marker" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{event.venue}</span>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
};

export default EventInfo;
