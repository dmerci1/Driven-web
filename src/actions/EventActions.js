import { CREATE_EVENT, EDIT_EVENT, DELETE_EVENT, FETCH_EVENTS } from './types';
import { asyncActionStart, asyncActionFinish, asyncActionError} from './asyncActions';
import { fetchSampleData } from '../components/mockApi';

export const fetchEvents = (events) => {
  return {
    type: FETCH_EVENTS,
    payload: events
  }
}

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

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      let events = await fetchSampleData();
      dispatch(fetchEvents(events))
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError())
    }
  }
}
