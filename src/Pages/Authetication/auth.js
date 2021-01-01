import React from 'react'
import Signupform from './../../Components/SignupForm/signupform';
import Signin from '../../Components/SigninForm/signin';
import SignOutBtn from './../../Components/SignOutBtn/SignOutBtn';

const Authentication = () => {
    return (
        <div>
            <h1>Authentication page</h1>
            <Signupform/>
            <Signin/>
            <SignOutBtn/>
        </div>
    )
}

export default Authentication
