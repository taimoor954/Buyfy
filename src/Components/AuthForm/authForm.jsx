import React,{useState} from 'react'
import { connect } from 'react-redux'
import Button from '../Buttons/Button.jsx'
import Signin from '../SigninForm/signin.jsx'
import Signupform from '../SignupForm/signupform.jsx'
import {googleSignin} from './../../Redux/Authentication/authActions'
import './authForm.css'
 const AuthForm = ({googleSignin}) => {
  var [formType, setFormType] = useState('signinForm')
  return (
    <div className='authForm'>
        <div className="authFormSwitcher">
          <Button  onClick={(e)=> setFormType('signinForm')} additionalStyle={{position:'relative'}} background='white' color='black'>Sign In
            <div className='underline'></div>
          </Button>
          <Button  onClick={(e)=> setFormType('signupForm')} additionalStyle={{position:'relative', justifySelf:'end'}} background='white' color='black'>Sign Up
            <div className='underline'></div>
          </Button>
        </div>
        <div className="authFormFields center">
          {formType == 'signinForm' ? <Signin/> : <Signupform/>}

        </div>
        <div className="authFormButtons">
          <div className="seperator" style={{marginBottom:'10px'}}>OR</div>
          <Button type='button' onClick={()=>googleSignin()}
        background="rgba(0,0,0,0.5)"
        additionalStyle={{ width: '60%', height: '40px' }}
        color="white"
      >
        Google Sign in
      </Button>
        </div>
    </div>  
  )
  
}

var actions ={
  googleSignin
}

export default connect(null,actions)(AuthForm)
