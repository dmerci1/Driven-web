import React from 'react';
import { Button, Divider, Form, Header, Segment, Label, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, matchesField, isRequired, composeValidators } from 'revalidate';
import FormTextInput from '../reuseables/FormTextInput';

const validate = combineValidators({
  firstNewPassword: isRequired({ message: 'Enter new plassword' }),
  secondNewPassword: composeValidators(
    isRequired({ message: 'confirm new plassword' }),
    matchesField('firstNewPassword')({ message: 'passwords dont match'})
  )()
})


const AccountPage = ({ error, invalid, submitting, handleSubmit, updatePassword, providerId }) => {
  return (
    <Segment>
        <Header dividing size="large" content="Account" />
        {providerId && providerId === 'password' &&
        <div>
          <Header color="teal" sub content ="Change Password" />
          <p>Update account settings</p>
          <Form onSubmit={handleSubmit(updatePassword)}>
            <Field
              width={8}
              name="firstNewPassword"
              type="password"
              pointing="left"
              inline="true"
              component={FormTextInput}
              basic={true}
              placeholder="New password"
            />
            <Field
              width={8}
              name="secondNewPassword"
              type="password"m
              pointing="left"
              inline="true"
              component={FormTextInput}
              basic={true}
              placeholder="New password"
            />
            {error && (<Label basic color="red">{error}</Label>)}
            <Divider />
            <Button disabled={invalid || submitting} size="large" positive content="update password" />
          </Form>
        </div>}

          {providerId && providerId === 'facebook.com' &&
        <div>
          <Header color="teal" sub content="Facebook Account"/>
          <p>Visit your Facebook account settings</p>
          <Button type="button" color="facebook">
          <Icon name="facebook" />
            Go to Facebook account
          </Button>
        </div>}

          {providerId && providerId === 'google.com' &&
        <div>
          <Header color="teal" sub content="Google Account"/>
          <p>Visit your Google Plus account settings</p>
          <Button  type="button" color="google plus">
          <Icon name="google plus" />
            Go to Google account
          </Button>
        </div>}
    </Segment>
  );
};

export default reduxForm({form: 'account', validate })(AccountPage);
