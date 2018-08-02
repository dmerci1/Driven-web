import React, { Component } from 'react';
import { Segment, Form, Header, Divider, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import FormDatePicker from '../reuseables/FormDatePicker';
import FormLocationInput from '../reuseables/FormLocationInput';
import FormTextInput from '../reuseables/FormTextInput';
import FormRadioInput from '../reuseables/FormRadioInput';


class BasicPage extends Component {
  render() {
    const {pristine, submitting, handleSubmit, updateProfile} = this.props;
    return (
      <Segment>
        <Header dividing size='large' content='Basics' />
        <Form onSubmit={handleSubmit(updateProfile)}>
          <Field
            width={8}
            name='displayName'
            type='text'
            component={FormTextInput}
            placeholder='Known As'
          />
          <Form.Group inline>
          <label>Gender: </label>
          <Field
            name='gender'
            type='radio'
            value='male'
            label='Male'
            component={FormRadioInput}
          />
          <Field
            name='gender'
            type='radio'
            value='female'
            label='Female'
            component={FormRadioInput}
          />
          </Form.Group>
          <Field
            width={8}
            name='dateOfBirth'
            component={FormDatePicker}
            placeholder='Date of Birth'
            dateFormat='YYYY-MM-DD'
            showYearDropdown={true}
            showMonthDropdown={true}
            dropDownMode='select'
          />
          <Field
            width={8}
            name='Home Town'
            placeholder='Home Town'
            options={{types: ['(cities)']}}
            label='Female'
            component={FormLocationInput}
          />
          <Divider />
          <Button disabled={pristine || submitting} size='large' positive content='Update Profile' />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({ form: 'userProfile' , enableReinitialize: true, destroyOnUnmount: false })(BasicPage);
