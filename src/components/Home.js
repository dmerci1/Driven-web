import React from 'react';
import { Grid, Button, Header, Icon } from 'semantic-ui-react';

const Home = ({history}) => {
  return (
    <div>
      <Header size='huge'  textAlign='center'>Social Sphere</Header>
      <Icon name='smile outline' Align='center' size='massive' />
      <Button onClick={() => history.push('./events')} animated size='massive' align='center' color='blue'>
        <Button.Content visible>Get Started</Button.Content>
        <Button.Content hidden>
          <Icon name='right arrow' />
        </Button.Content>
      </Button>
    </div>
  );
};

export default Home;
