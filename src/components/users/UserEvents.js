import React from 'react';
import { Button, Card, Grid, Image, Header, Segment, List, Item, Icon, Menu } from 'semantic-ui-react';

const Userevents = ({profile}) => {
  return(

    <Grid.Column width={12}>
      <Segment attached>
        <Header icon='calendar' content='Events'/>
        <Menu secondary pointing>
          <Menu.Item name='All Events' active/>
          <Menu.Item name='Past Events'/>
          <Menu.Item name='Future Events'/>
          <Menu.Item name='Events Hosted'/>
        </Menu>

        <Card.Group itemsPerRow={5}>

          <Card>
            <Card.Content>
              <Card.Header textAlign='center'>
                Event Title
              </Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    </Grid.Column>
    );
  };

export default Userevents;
