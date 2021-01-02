import React from 'react'
import Signupform from './../../Components/SignupForm/signupform';
import Signin from '../../Components/SigninForm/signin';
import SignOutBtn from './../../Components/SignOutBtn/SignOutBtn';
import GooglesigninBtn from './../../Components/GoogleSigninBtn/GooglesigninBtn';

const Authentication = () => {
    return (
        <div>
            <h1>Authentication page</h1>
            <Signupform/>
            <Signin/>
            <SignOutBtn/>
            <GooglesigninBtn/>
        </div>
    )
}

export default Authentication
