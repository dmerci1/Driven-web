import React from 'react';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import FormTextInput from '../reuseables/FormTextInput';
import { signIn, socialLogin } from '../../actions/AuthActions';
import SocialMediaSignUp from './SocialMediaSignUp';

const actions = {
  signIn,
  socialLogin
}

const signInForm = ({signIn, handleSubmit, error, socialLogin}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(signIn)}>
      <Segment>
        <Field
          name="email"
          component={FormTextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={FormTextInput}
          type="password"
          placeholder="password"
        />
        {error && <Label basic color='red'>{error}</Label>}
        <Button fluid size="large" color="teal">
          Login
        </Button>
        <Divider>
          Or
        </Divider>
        <SocialMediaSignUp socialLogin={socialLogin}/>
      </Segment>
    </Form>
  );
};

export default connect(null, actions)(reduxForm({form: 'signInForm'})(signInForm));
