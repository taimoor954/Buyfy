import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../Redux/Authentication/authActions';
import TextField from '@material-ui/core/TextField';
import Button from '../Buttons/Button';
import './signupform.css'
const Signupform = ({ signup }) => {
  var [fullName, setFullName] = useState('');
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var handleFormSumit = (e) => {
    e.preventDefault();
    var credentials = {
      fullName,
      email,
      password,
    };
    signup(credentials);
  };

  return (
    <div>
      <form className="signupForm" onSubmit={handleFormSumit}>
        <TextField
          id="standard-basic"
          style={{ width: '100%', marginTop: '2em' }}
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="standard-basic"
          style={{ width: '100%', marginTop: '2em' }}
          label="Email"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="standard-basic"
          style={{ width: '100%', marginTop: '2em', marginBottom:'1em' }}
          label="Password"
        />
        <Button
          background="rgba(0,0,0,0.5)"
          additionalStyle={{ width: '40%', height: '40px' }}
          color="white"
        >
          Sign Up
        </Button>

        {/* <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type='text' placeholder='email'></input>
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type='text' placeholder='password'></input>
            <button type='submit'>Submit</button> */}
      </form>

      {/* <h1>Sign Up</h1>
            <form onSubmit={handleFormSumit}>

            <input onChange={(e)=>{setFullName(e.target.value)}} value={fullName}  type='text' placeholder='fullname'></input>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type='text' placeholder='email'></input>
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type='text' placeholder='password'></input>
            <button type='submit'>Submit</button>
            </form> */}
    </div>
  );
};
var actions = {
  signup,
};

export default connect(null, actions)(Signupform);
