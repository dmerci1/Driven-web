import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import EventsReducer from './EventsReducer';
import ModalReducer from './ModalReducer';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  events: EventsReducer,
  form: FormReducer,
  modals: ModalReducer,
  auth: AuthReducer
});

export default rootReducer;
