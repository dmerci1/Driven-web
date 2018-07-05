import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
  render() {
    return (
        <Segment>
          <form>
            <Form.Field>
              <label>Event Title</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input type="date" placeholder="Date" />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input placeholder="City" />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input placeholder="Venue" />
            </Form.Field>
            <Form.Field>
              <label>Host</label>
              <input placeholder="Host" />
            </Form.Field>
            <Button positive type="submit">
              submit
            </Button>
            <Button type="button">
              Cancel
            </Button>
          </form>
      </Segment>
    );
  }
}

export default EventForm;
