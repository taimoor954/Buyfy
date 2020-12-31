import React ,{useState} from 'react'
import {connect} from 'react-redux'
import { signup } from './../../Redux/Authentication/authActions';

const Signupform = ({signup}) => {
    var [fullName, setFullName] = useState('')
    var [email, setEmail] = useState('')
    var [password, setPassword] = useState('')
    var handleFormSumit =(e) => {
        e.preventDefault()
        var credentials  = {
            fullName,
            email,
            password
        }
        signup(credentials)
       
    }


    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleFormSumit}>

            <input onChange={(e)=>{setFullName(e.target.value)}} value={fullName}  type='text' placeholder='fullname'></input>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type='text' placeholder='email'></input>
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type='text' placeholder='password'></input>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
var actions = {
    signup
}

export default connect(null, actions)(Signupform)
