import React,{useState} from 'react'
import {connect} from 'react-redux'
import {signin} from '../../Redux/Authentication/authActions';
const Signin = ({signin}) => {
    var [email, setEmail] = useState('')
    var [password, setPassword] = useState('')
    var handleFormSumit =(e) => {
        e.preventDefault()
        var credentials  = {
            email,
            password
        }
        signin(credentials)
    }


    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleFormSumit}>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type='text' placeholder='email'></input>
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type='text' placeholder='password'></input>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
var actions = {
    signin
}

export default connect(null,actions)(Signin)
