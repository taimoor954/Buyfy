import { CLOSE_MODAL, OPEN_MODAL } from './modalConstants';

export var openModal = ({ modalType, modalProps={} }) => ({
  type: OPEN_MODAL,
  payload: {
    modalProps,
    modalType,
  },
});
export var closeModal = () => ({
  type: CLOSE_MODAL,
  
});
