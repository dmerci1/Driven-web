import { ReducerUtility } from '../utilities/ReducerUtility';
import { CREATE_EVENT, EDIT_EVENT, DELETE_EVENT, FETCH_EVENTS } from '../actions/types';

const initialState = [];
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

export const fetchEvents = (state, payload) => {
  return payload.events
};

export default ReducerUtility(initialState, {
  [CREATE_EVENT]: createEvent,
  [EDIT_EVENT]: editEvent,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENTS]: fetchEvents
});
