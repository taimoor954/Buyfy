import React from 'react'
import { connect } from 'react-redux'
import './ModalContainer.css'
import {closeModal} from './../../Redux/Modal/modalActions.js'
 const ModalContainer = ({children}) => {
  return (
    <div className='modalContainer' onClick={(e)=>{
      if(e.target === e.currentTarget) closeModal()
    }}>
      {children}
      
    </div>
  )
}

var actions ={
  closeModal
}

export default connect(null, actions)(ModalContainer)