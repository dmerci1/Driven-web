import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import EventAttendes from './EventAttendes';

class EventItems extends Component {
  render() {
    const {event, deleteEvent} = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src="assets/pat.jpg"  />
                <Item.Content>
                  <Item.Header as="a">{event.title}</Item.Header>
                  <Item.Description>
                    Hosted by <a>{event.host}</a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
                <span>
                  <Icon name="clock" /> {format(event.date.toDate(), 'dddd Do MMMM')} at{' '}
                  {format(event.date.toDate(), 'HH:mm')} |
                  <icon name="marker" /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                    <List horizontal>
                      {event.attendees && Object.values(event.attendees).map((attendee, index) => (
                        <EventAttendes key={index} attendee = {attendee} />
                      ))}

                    </List>
              </Segment>
              <Segment clearing>
                      <span>{event.description}</span>
                      <Button onClick={deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
                      <Button as={Link} to={`/event/${event.id}`} color="teal" floated="right" content="View" />
                </Segment>
          </Segment.Group>
    );
  }
}

export default EventItems;
