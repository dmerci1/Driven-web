import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import EventsReducer from './EventsReducer';
import ModalReducer from './ModalReducer';
import AuthReducer from './AuthReducer';
import AsyncReducer from './AsyncReducers';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  events: EventsReducer,
  form: FormReducer,
  modals: ModalReducer,
  auth: AuthReducer,
  async: AsyncReducer,
  toastr: toastrReducer
});

export default rootReducer;
