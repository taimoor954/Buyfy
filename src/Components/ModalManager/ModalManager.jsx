import React from 'react'
import { connect } from 'react-redux'
import AddressFormModal from '../AddressFormModal/AddressFormModal.jsx'
import TestModal from '../TestModal/testModal.jsx'
//contain all modals 
var modalLookUp ={
testModal: TestModal,
addressFormModal: AddressFormModal
}




 const ModalManager = ({modal}) => {
  var renderedModal = null
  if(modal)
  {
    var {modalType, modalProps} = modal
    var ModalComponent = modalLookUp[modalType]
    renderedModal = <ModalComponent {...modalProps}/>
  }
  return (
    <div>
      {renderedModal}
    </div>
  )
}
var mapState = (store)=> {
return{
  modal: store.modal
}
}

export default connect(mapState)(ModalManager)