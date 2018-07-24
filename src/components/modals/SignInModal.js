import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { closeModal } from '../../actions/ModalActions';
import SignInForm from '../auth/SignInForm';

const actions = {closeModal}

class SignInModal extends Component {
    render() {
      return (
        <Modal
          size="mini"
          open={true}
          onClose={closeModal}>
          <Modal.Header>Sign In</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <SignInForm />
              </Modal.Description>
            </Modal.Content>
        </Modal>
      );
    }
  }
export default connect(null, actions)(SignInModal);
