import { CLOSE_MODAL, OPEN_MODAL } from './modalConstants';

const intialState =null;
const modalReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      return { modalType: payload.modalType, modalProps: payload.modalProps };
    case CLOSE_MODAL:
      return null
    default:
      return state;
  }
};

export default modalReducer