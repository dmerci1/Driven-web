import { SIGN_IN_USER, SIGN_OUT_USER } from '../actions/types';
import { ReducerUtility } from '../utilities/ReducerUtility';


const initialState = {
  currentUser: {}
};

export const signInUser = (state, payload) => {
  return {
    ...state,
    authenticated: true,
    currentUser: payload.creds.email
  };
};

export const signOutUser = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: {}
  };
};

export default ReducerUtility(initialState, {
  [SIGN_IN_USER]: signInUser,
  [SIGN_OUT_USER]: signOutUser
});
