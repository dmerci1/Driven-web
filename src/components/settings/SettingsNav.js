import React from 'react';
import { Grid, Header, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const SettingsNav = () => {
  return (
    <Grid.Column className="main" width={4}>
      <Menu vertical>
        <Header attacked inverted color="grey" content="profile" />
        <Menu.Item as={NavLink} to='/settings/basics'>Basics</Menu.Item>
        <Menu.Item as={NavLink} to='/settings/about'>About Me</Menu.Item>
        <Menu.Item as={NavLink} to='/settings/photos'>My Photos</Menu.Item>
      </Menu>
        <Grid.Row />
        <Menu vertical>
          <Header attached inverted color="grey" content="Account" />
          <Menu.Item as={NavLink} to='/settings/account'>My Account</Menu.Item>
        </Menu>
      </Grid.Column>
  );
};

export default SettingsNav;
