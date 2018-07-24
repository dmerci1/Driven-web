import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';
import { ReducerUtility } from '../utilities/ReducerUtility';


const initialState = null;

export const openModal = (state, payload) => {
  const { modalType, modalProps } = payload;
  return { modalType, modalProps}
}

export const closeModal = (state, payload) => {
  return null
}

export default ReducerUtility(initialState, {
  [OPEN_MODAL]: openModal,
  [CLOSE_MODAL]: closeModal
});
