import React from 'react'
import Signupform from '../../Components/SignupForm/signupform';
import Signin from '../../Components/SigninForm/signin';
import SignOutBtn from '../../Components/SignOutBtn/SignOutBtn';
import GooglesigninBtn from '../../Components/GoogleSigninBtn/GooglesigninBtn';
import './auth.css'
import { AuthForm } from '../../Components/AuthForm/authForm';
const Authentication = () => {
    return (
        <div className='auth'>
            <div className="authLeft"></div>
            <div className="authRight center" style={{alignItems:'start'}}>
                <AuthForm />
            </div>
            {/* <h1>Authentication page</h1>
            <Signupform/>
            <Signin/>
            <SignOutBtn/>
            <GooglesigninBtn/> */}
        </div>
    )
}

export default Authentication
