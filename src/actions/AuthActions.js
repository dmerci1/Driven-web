import { SIGN_IN_USER, SIGN_OUT_USER } from './types';
import { closeModal } from './ModalActions';

export const signIn = (creds) => {
  return dispatch => {
    dispatch({ type: SIGN_IN_USER, payload: { creds }});
    dispatch(closeModal());
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT_USER
  };
};
