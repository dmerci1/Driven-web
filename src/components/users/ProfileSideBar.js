import React from 'react';
import { Button, Card, Grid, Image, Header, Segment, List, Item, Icon, Menu } from 'semantic-ui-react';

const ProfileSideBar = ({profile}) => {
  return(
    <Grid.Column width={4}>
      <Segment>
        <Button color='teal' fluid basic content='Edit Profile' />
      </Segment>
    </Grid.Column>
    );
  };

export default ProfileSideBar;
