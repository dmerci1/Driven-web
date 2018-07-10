import React from 'react';
import { Segment, Item, Image, Header, Button } from 'semantic-ui-react';

const eventImageStyle = {
  filter: 'brightness(50%)'
};

const eventImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
};

const EventHeader = ({event}) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0'}}>
        <Image src="/assets/tough.jpg" fluid style={eventImageStyle}/>
          <Segment basic style={eventImageTextStyle}>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Header
                    size="huge"
                    content={event.title}
                    style={{ color: 'white' }}
                  />
                  <p>{event.date}</p>
                  <p>
                    Host by <strong>{event.host}</strong>
                  </p>
                </Item.Content>
              </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Canel My Place</Button>
        <Button color="teal">Join This Event</Button>

        <Button color="orange" floated="right">
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default EventHeader;
