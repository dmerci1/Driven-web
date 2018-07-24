import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Container, Button, Icon } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { openModal } from '../actions/ModalActions';
import { signIn } from '../actions/AuthActions';

const actions = {
  openModal,
  signIn
}

const mapState = (state) => ({
  auth: state.auth
})

class NavBar extends Component {

handleSignIn = () => {
  this.props.openModal('SignInModal')
};

handleRegister = () => {
  this.props.openModal('SignUpModal')
}

handleSignOut = () => {
  this.props.signOut();
  this.props.history.push('./')
};

  render() {
    const { auth } = this.props;
    const authenticated = auth.authenticated;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to='/' header>
            <Icon size="big" color="white" name="trophy" />
            Driven
          </Menu.Item>
          <Menu.Item  as={NavLink} to='./events' name="Events" />
          {authenticated &&
          <Menu.Item as={NavLink} to='./people' name="People" />}
          {authenticated &&
          <Menu.Item>
            <Button as={Link} to='./createEvent' floated="right" positive inverted content="Create Event" />
          </Menu.Item>}
            {authenticated ? (
              <SignedInMenu  currentUser={auth.currentUser} signOut={this.handleSignOut} />
            ) : (
              <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister}/>
            )}
      </Container>
    </Menu>
    );
  }
}

export default withRouter(connect(mapState, actions)(NavBar));
