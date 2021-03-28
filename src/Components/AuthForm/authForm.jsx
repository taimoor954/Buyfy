import React from 'react'
import Button from '../Buttons/Button.jsx'
import Signin from '../SigninForm/signin.jsx'
import Signupform from '../SignupForm/signupform.jsx'
import './authForm.css'
export const AuthForm = () => {
  return (
    <div className='authForm'>
        <div className="authFormSwitcher">
          <Button additionalStyle={{position:'relative'}} background='white' color='black'>Sign In
            <div className='underline'></div>
          </Button>
          <Button additionalStyle={{position:'relative', justifySelf:'end'}} background='white' color='black'>Sign Up
            <div className='underline'></div>
          </Button>
        </div>
        <div className="authFormFields">
          {/* <Signin/> */}
          <Signupform/>
        </div>
        <div className="authFormButtons">
          <div className="seperator">OR</div>
        </div>
    </div>  
  )
}
