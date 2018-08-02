import React, { Component } from 'react';
import { Segment, Form, Header, Divider, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import FormDatePicker from '../reuseables/FormDatePicker';
import FormLocationInput from '../reuseables/FormLocationInput';
import FormTextInput from '../reuseables/FormTextInput';
import FormRadioInput from '../reuseables/FormRadioInput';
import FormInputSelect from '../reuseables/FormInputSelect';

const interests = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
    { key: 'sports', text: 'Sports', value: 'sports' },
      { key: 'movies', text: 'Movies', value: 'movies' },
]

const AboutPage = ({ pristine, submitting, handleSubmit, updateProfile }) => {
  return (
    <Segment>
        <Header dividing size="large" content="About Me" />
          <p>Complete Profiles</p>
          <Form onSubmit={handleSubmit(updateProfile)}>
            <Form.Group inline>
              <label>Update your status:</label>
                <Field
                  name="status"
                  type="radio"
                  value="single"
                  label="Signle"
                  component={FormRadioInput}
                />
                <Field
                  name="status"
                  type="radio"
                  value="relationship"
                  label="Relationship"
                  component={FormRadioInput}
                />
                <Field
                  name="status"
                  type="radio"
                  value="married"
                  label="married"
                  component={FormRadioInput}
                />
              </Form.Group>
                <Field
                  name="interests"
                  options={interests}
                  value="interests"
                  multiple={true}
                  component={FormInputSelect}
                  placeholder="select interests"
                />
                <Field
                width={8}
                  name="occupation"
                  type="text"
                  placeholder="Occupation"
                  component={FormTextInput}
                />
                <Field
                 width={8}
                  name="origin"
                  options={{ types: ['(regions)']}}
                  component={FormLocationInput}
                  placeholder="country"
                />
                <Divider />
                <Button disabled={pristine || submitting} positive content="Update Profiled" />
              </Form>

    </Segment>
  );
};

export default reduxForm({ form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false })(AboutPage);
