import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signin } from '../../Redux/Authentication/authActions';
import TextField from '@material-ui/core/TextField';
import Button from '../Buttons/Button';
import './signin.css';
const Signin = ({ signin }) => {
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var handleFormSumit = (e) => {
    e.preventDefault();
    var credentials = {
      email,
      password,
    };
    signin(credentials);
  };

  return (
    <form className="signinForm" onSubmit={handleFormSumit}>
      <TextField
        id="standard-basic"
        style={{ width: '100%', marginTop: '1em' }}
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="standard-basic"
        style={{ width: '100%', marginTop: '1em' }}
        label="Password"
      />
      <Button
        type="submit"
        background="rgba(0,0,0,0.5)"
        additionalStyle={{ width: '60%', height: '40px' }}
        color="white"
      >
        Sign In
      </Button>

      {/* <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type='text' placeholder='email'></input>
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type='text' placeholder='password'></input>
            <button type='submit'>Submit</button> */}
    </form>
  );
};
var actions = {
  signin,
};

export default connect(null, actions)(Signin);
