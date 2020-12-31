import React from 'react'
import Signupform from './../../Components/SignupForm/signupform';
import Signin from '../../Components/SigninForm/signin';

const Authentication = () => {
    return (
        <div>
            <h1>Authentication page</h1>
            <Signupform/>
            <Signin/>

        </div>
    )
}

export default Authentication
