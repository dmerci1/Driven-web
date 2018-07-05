import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventAttendes from './EventAttendes';

class EventItems extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src="assets/pat.jpg"  />
                <Item.Content>
                  <Item.Header as="a">Event Title</Item.Header>
                  <Item.Description>
                    Hosted by <a>nosted by</a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
                <span>
                  <Icon name="clock" /> date |
                  <icon name="marker" />time
                </span>
            </Segment>
            <Segment>
                    <List horizontal>
                      <EventAttendes />
                      <EventAttendes />
                      <EventAttendes />
                    </List>
              </Segment>
              <Segment clearing>
                      <span>Event description will go here</span>
                      <Button as="a" color="teal" floated="right" content="View" />
                </Segment>
          </Segment.Group>
    );
  }
}

export default EventItems;
