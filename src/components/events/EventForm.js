/*global google*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form'
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import cuid from 'cuid';
import moment from 'moment';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Script from 'react-load-script';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { createEvent, editEvent } from '../../actions/EventActions';
import FormTextInput from '../reuseables/FormTextInput';
import FormTextArea from '../reuseables/FormTextArea';
import FormInputSelect from '../reuseables/FormInputSelect';
import FormDatePicker from '../reuseables/FormDatePicker';
import FormLocationInput from '../reuseables/FormLocationInput';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

let event= {};

if (eventId && state.events.length > 0) {
  event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  editEvent
};

const category = [
  {key: 'cardio', text: 'Cardio', value: 'cardio'},
  {key: 'power', text: 'Power Lifting', value: 'power'},
  {key: 'build', text: 'Body Building', value: 'build'},
];

const validate = combineValidators({
  title: isRequired({message: 'must enter title'}),
  category: isRequired({message: 'must enter category'}),
  description: composeValidators(
    isRequired({message: 'must enter description'}),
    hasLengthGreaterThan(4)({message: 'enter a longer message fuck!'}),
  )(),
  city: isRequired({message: 'must enter city'}),
  venue: isRequired({message: 'must enter venue'}),
  date: isRequired({message: 'must enter date'}),
})
class EventForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {},
    scriptLoaded: false
  }

  handleScriptLoaded = () => {
    this.setState({scriptLoaded: true});
  }

SelectLocation = (selectedLocation) => {
  geocodeByAddress(selectedLocation)
  .then(results => getLatLng(results[0]))
  .then(latlng => {
    this.setState({
      cityLatLng: latlng
    });
  })
  .then(() => {
    this.props.change('city', selectedLocation)
  })
};

SelectVenue = (selectedVenue) => {
  geocodeByAddress(selectedVenue)
  .then(results => getLatLng(results[0]))
  .then(latlng => {
    this.setState({
      venueLatLng: latlng
    });
  })
  .then(() => {
    this.props.change('venue', selectedVenue)
  })
};
  onFormSubmit = (values) => {
    values.date = moment(values.date).format()
    values.venueLatLng = this.state.venueLatLng;
    if (this.props.initialValues.id) {
        this.props.editEvent(values);
        this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Bob'
      }
      this.props.createEvent(newEvent)
      this.props.history.push('/events')
    }
  }

  render() {
    const {closeForm, invalid, submitting, pristine} = this.props;
    return (
      <Grid>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgKc-SmI6hH1G-nJ0SwKZHGxplhODaN0g&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
          <Grid.Column width={10}>
        <Segment>
          <Header sub color='teal' content='Event Details' />
          <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
            <Field
              name='title'
              type='text'
              component={FormTextInput}
              placeholder='Event Title'
            />
            <Field
              name='category'
              options={category}
              multiple={true}
              type='text'
              component={FormInputSelect}
              placeholder='Event category'
            />
            <Field
              name='description'
              rows={3}
              type='text'
              component={FormTextArea}
              placeholder='Event description'
            />
            <Header sub color='teal' content='Event Location Details' />
            <Field
              name='city'
              type='text'
              component={FormLocationInput}
              options={{ types: ['(cities)'] }}
              placeholder='Event city'
              onSelect={this.selectLocation}
            />
            {this.state.scriptLoaded &&
            <Field
              name='venue'
              type='text'
              component={FormLocationInput}
              options={{
                types: ['establishment'],
                radius: 1000,
                location: new google.maps.LatLng(this.state.cityLatLng)
                }}
              placeholder='Event venue'
              onSelect={this.SelectVenue}
            />}
            <Field
               name='date'
               type='text'
               component={FormDatePicker}
               dateFormat='YYY-MM-DD HH:MM'
               timeFormat='HH:mm'
               showTimeSelect
               placeholder='date'
             />
            <Button disabled={invalid || submitting || pristine} positive type="submit">
              Submit
            </Button>
            <Button onClick={closeForm} type="button">Cancel</Button>
          </Form>
        </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(reduxForm({form: 'eventForm', enableReinitialize: true, validate })(EventForm));
