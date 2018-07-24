import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import EventsReducer from './EventsReducer';
import ModalReducer from './ModalReducer';
import AuthReducer from './AuthReducer';
import AsyncReducer from './AsyncReducers';

const rootReducer = combineReducers({
  events: EventsReducer,
  form: FormReducer,
  modals: ModalReducer,
  auth: AuthReducer,
  async: AsyncReducer,
  toastr: toastrReducer
});

export default rootReducer;
