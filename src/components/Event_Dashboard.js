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
      isOpen: false,
      selectedEvent: null
    }

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleUpdateEvent = this.handleUpdateEvent.bind(this);
  }

  openForm() {
    this.setState({
      selectedEvent: null,
      isOpen: true
    })
  }

  closeForm() {
    this.setState({
      isOpen: false
    })
  }

  handleUpdateEvent(updatedEvent) {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent)
        } else {
          return event
        }
      }),
      isOpen: false,
      selectedEven: null
    })
  }

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
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

  handleDeleteEvent = (eventId) => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    })
  }

render() {
  const {selectedEvent} = this.state;
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={this.state.events} />
      </Grid.Column>
      <Grid.Column width={6}>
      <Button onClick={this.openForm} positive content='Create Event' />
      {this.state.isOpen &&
        <EventForm updatedEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.createEvent} closeForm={this.closeForm} />
      }
      </Grid.Column>
    </Grid>
  );
}
}
/*const eventsDashboard = [
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
      isOpen: false,
      selectedEvent: null
    }

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  openForm() {
    this.setState({
      selectedEvent: null,
      isOpen: true
    })
  }

  closeForm() {
    this.setState({
      isOpen: false
    })
  }

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent)
        } else {
          return event
        }
      }),
      isOpen: false,
      selectedEven: null
    })
  }
  HandleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
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

  handleDeleteEvent = (eventId) => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    })
  }
  render() {
    const {selectedEvent} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handlOpenEvent} events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
        <Button onClick={this.openForm} positive content='Create Event' />
        {this.state.isOpen &&
          <EventForm updatedEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.createEvent} closeForm={this.closeForm} />
        }
        </Grid.Column>
      </Grid>
    );
  }
}
*/
export default EventDash;
