import React from 'react';
import { Button, Card, Grid, Image, Header, Segment, List, Item, Icon, Menu } from 'semantic-ui-react';
import format from 'date-fns/format';

const ProfileDescription = ({profile}) => {
  let createdAt;
  if (profile.createdAt) {
    createdAt = format(profile.createdAt.toDate(), 'D MMM YYYY');
  }
  return(
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header icon='smile'  />
            <p>Occupation: <strong>{profile.occupation || "No work info"}</strong></p>
            <p>Current City: <strong>{profile.currentCity || "Not listed"}</strong></p>
            <p>Home Town: <strong>{profile.homeTown || "No listed"}</strong></p>
            <p>Joined: <strong>{createdAt}</strong></p>
        </Grid.Column>
        <Grid.Column width={6}>
          <Header icon='heart outline' content='Interests' />
          <List>
            {profile.interests &&
            profile.interests.map((interest, index) => (
              <Item key={index}>
                <Icon name="heart" />
                <Item.Content>{interest}</Item.Content>
              </Item>
            ))}
          </List> : <p>No interests to show</p>
        </Grid.Column>
      </Grid>
     </Segment>
    </Grid.Column>
  );
};

export default ProfileDescription;
