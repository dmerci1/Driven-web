import React from 'react';
import { Button, Divider, Form, Header, Segment, Label, Icon  } from 'semantic-ui-react';
import { Field, ReduxForm } from 'redux-form';
import FormTextInput  from '../reuseables/FormTextInput';


const AboutPage = (error) => {
  return (
    <Segment>
        <Header dividing size="large" content="Account" />
        <div>
          <Header color="teal" sub content ="Change Password" />
          <p>Update account settings</p>
          <Form>
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
              type="password"
              pointing="left"
              inline="true"
              component={FormTextInput}
              basic={true}
              placeholder="New password"
            />
            {error && (<Label basic color="red">{error}</Label>)}
            <Divider />
            <Button size="large" positive content="update password" />
          </Form>
        </div>

        <div>
          <Header color="teal" sub content="Facebook Account" />
          <p>Visit your Facebook account settings</p>
          <Button type="button" color="facebook">
          <Icon name="facebook" />
            Go to Facebook account
          </Button>
        </div>
        <div>
          <Header color="teal" sub content="Google Account" />
          <p>Visit your Google Plus account settings</p>
          <Button type="button" color="google plus">
          <Icon name="google plus" />
            Go to Google account
          </Button>
        </div>
    </Segment>
  );
};

export default AboutPage;
