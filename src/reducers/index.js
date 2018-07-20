import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import EventsReducer from './EventsReducer';

const rootReducer = combineReducers({
  events: EventsReducer,
  form: FormReducer,
});

export default rootReducer;
