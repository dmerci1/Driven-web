import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import FormTextInput from '../reuseables/FormTextInput';
import { signIn } from '../../actions/AuthActions';

const actions = { signIn };

const SignInForm = ({ signIn, handleSubmit }) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(signIn)}>
      <Segment>
        <Field
          name="email"
          component={FormTextInput}
          type="text"
          placeholder="Email"
        />
        <Field
          name="passowrd"
          component={FormTextInput}
          type="password"
          placeholder="password"
        />
        <Button fluid size="large" color="teal">
          Sign In
        </Button>
      </Segment>
     </Form>
  );
};

export default connect(null, actions)(reduxForm({ form: 'SignInForm' })(SignInForm));
