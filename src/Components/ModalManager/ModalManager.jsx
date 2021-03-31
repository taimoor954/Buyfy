import React from 'react'
import { connect } from 'react-redux'
//contain all modals 
var modalLookUp ={

  
}




 const ModalManager = ({modal}) => {
  var renderedModal = null
  if(modal)
  {
    var {modalType='testModal', modalProps} = modal
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

export default connect(mapState,null)(ModalManager)