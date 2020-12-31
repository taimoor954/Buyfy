import React,{useState} from 'react'

const Signin = () => {
    var [email, setEmail] = useState('')
    var [password, setPassword] = useState('')
    var handleFormSumit =(e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
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

export default Signin
