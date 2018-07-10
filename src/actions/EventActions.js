import { CREATE_EVENT, EDIT_EVENT, DELETE_EVENT } from './types';

export const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: {
      event
    }
  };
};

export const editEvent = (event) => {
  return {
    type: EDIT_EVENT,
    payload: {
      event
    }
  };
};

export const deleteEvent = (eventid) => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventid
    }
  };
};
