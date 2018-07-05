import React, { Component } from 'react';
import cuid from 'cuid';
import { Grid, Button } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from './EventForm';

const eventsDashboard = [
  {
    id: '1',
    title: 'fuck',
    date: '7/4/18',
    category: 'culture',
    description: 'nah',
    city: 'astoria',
    venue: 'hookahs',
    host: 'dan',
    hostPhotoURL: 'assets/pat.jpg',
    attendees: [
      {
        id: 'a',
        name: 'bob',
        photoURL: 'assets/pat.jpg'
      },
      {
      id: 'b',
      name: 'tom',
      photoURL: 'assets/pat.jpg'
    },
    ]
  },
  {
    id: '2',
    title: 'fuck again!',
    date: '7/5/18',
    category: 'culture',
    description: 'nah',
    city: 'astoria',
    venue: 'hookahs',
    host: 'jimballswaet',
    hostPhotoURL:'assets/pat.jpg',
    attendees: [
      {
        id: 'b',
        name: 'bob',
        photoURL: 'assets/icon.png'
      },
      {
      id: 'a',
      name: 'tom',
      photoURL: 'assets/logo.png'
    },
    ]
  },
]

class EventDash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: eventsDashboard,
      isOpen: false
    }

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  openForm() {
    this.setState({
      isOpen: true
    })
  }

  closeForm() {
    this.setState({
      isOpen: false
    })
  }

  createEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.PhotoURL ='../assets.png';
    const updatedEvents = [...this.state.events, newEvent]
    this.setState({
      events: updatedEvents,
      isOpen: false
    })
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
        <Button onClick={this.openForm} positive content='Create Event' />
        {this.state.isOpen &&
          <EventForm createEvent={this.createEvent} closeForm={this.closeForm} />
        }
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDash;
