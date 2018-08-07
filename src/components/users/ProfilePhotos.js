import React from 'react';
import { Button, Card, Grid, Image, Header, Segment, List, Item, Icon, Menu } from 'semantic-ui-react';

const ProfilePhotos = ({photos}) => {
  return(
    <Grid.Column width={12}>
      <Segment attached>
        <Header icon='image' content='Photos' />

        <Image.Group size='small'>
          {photos && photos.map(photo => <Image key={photo.id} src={photo.url} />)}
        </Image.Group>
      </Segment>
    </Grid.Column>
    );
  };

export default ProfilePhotos;
