import React from 'react';
import { Button, Card, Grid, Image, Header, Segment, List, Item, Icon, Menu } from 'semantic-ui-react';
import differenceInYears from 'date-fns/difference_in_years';

const ProfileHeader = ({profile}) => {
  let age;
  if (profile.dateOfBirth) {
    age = differenceInYears(Date.now(), profile.dateOfBirth.toDate());
  } else {
    age = 'unknown age';
  }
    return (
      <Grid.Column width={16}>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image avatar size='small' src={profile.photoURL || '/assets/user.png'}/>
              <Item.Content verticalAlign='bottom'>
                <Header as='h1'>{profile.displayName}</Header>
                <br/>
                <Header as='h1'>{age}</Header>
                <br/>
                <Header as='h1'>{profile.occupation}</Header>
                <br/>
                <Header as='h1'>{profile.currentCity}</Header>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Grid.Column>
    );
  };

export default ProfileHeader;
