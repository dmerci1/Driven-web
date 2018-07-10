import { ReducerUtility } from '../utilities/ReducerUtility';
import { CREATE_EVENT, EDIT_EVENT, DELETE_EVENT } from '../actions/types';

const initialState = [
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
];

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

export const editEvent = (state, payload) => {
  return [
      ...state.filter(event => event.id !== payload.event.id),
      Object.assign({}, payload.event)
    ];
};

export const deleteEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.eventid)
  ];
};

export default ReducerUtility(initialState, {
  [CREATE_EVENT]: createEvent,
  [EDIT_EVENT]: editEvent,
  [DELETE_EVENT]: deleteEvent
});
