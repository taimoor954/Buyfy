import React from 'react'
import {connect} from 'react-redux'
import { signout } from '../../Redux/Authentication/authActions';

const SignOutBtn = ({signout}) => {
    return (
        <div>
            <button onClick={signout}>Sign Out</button>
        </div>
    )
}
var actions = {
    signout
}
export default connect(null,actions)(SignOutBtn)
