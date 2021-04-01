import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from './../../Redux/Modal/modalActions.js';
import './ModalContainer.css';
const ModalContainer = ({ children,closeModal }) => {
  return (
    <div
      className="modalContainer center"
      onClick={(e) => {
        if (e.target == e.currentTarget) closeModal();
      }}
    >
      {children}
    </div>
  );
};

var actions = {
  closeModal,
};

export default connect(null, actions)(ModalContainer);
