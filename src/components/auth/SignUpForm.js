import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import FormTextInput from '../reuseables/FormTextInput';

const SignUpForm = () => {
  return (
    <Form error size="large">
      <Segment>
        <Field
          name="display name"
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

export default reduxForm({ form: 'SignUpForm' })(SignUpForm);
