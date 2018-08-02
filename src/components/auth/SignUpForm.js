import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, isRequired } from 'revalidate';
import FormTextInput from '../reuseables/FormTextInput';
import { signUpUser } from '../../actions/AuthActions';
import SocialMediaSignUp from './SocialMediaSignUp';

const actions = {
  signUpUser
};

const validate = combineValidators({
  displayName: isRequired('displayName'),
  email: isRequired('email'),
  password: isRequired('password')
})
const SignUpForm = ({ signUpUser, handleSubmit, error, invalid, submitting }) => {
  return (
  <div>
      <Form size="large" onSubmit={handleSubmit(signUpUser)}>
        <Segment>
          <Field
            name="displayName"
            component={FormTextInput}
            type="text"
            placeholder="Known as"
          />
          <Field
            name="email"
            component={FormTextInput}
            type="email"
            placeholder="email"
          />
          <Field
            name="password"
            component={FormTextInput}
            type="password"
            placeholder="password"
          />
          {error && <Label basic color='red'>{error}</Label>}
          <Button disabled={invalid || submitting} fluid size="large" color="teal">
            Sign Up
          </Button>
          <Divider>
            Or
          </Divider>
          <SocialMediaSignUp />
        </Segment>
       </Form>
       </div>
    );
  };


  export default connect(null, actions)(reduxForm({ form: 'signUpUser', validate })(SignUpForm));
