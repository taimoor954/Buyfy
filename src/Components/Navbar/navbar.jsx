import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Header from "./../Header/header";
import { connect } from "react-redux";
import { signout } from './../../Redux/Authentication/authActions';

const MenuItem = ({ children, to = "#" , ...restProps}) => {
  return (
    <div>
      <div  {...restProps} className="menuItem">
        <Link to={to}>
          <Header
            style={{ cursor: "pointer", display: "inline" }}
            fontSize={31}
            fontWeight="bold"
          >
            {children}
          </Header>
        </Link>
      </div>
    </div>
  );
};

const Navbar = ({authentication, signout}) => {
  return (
    <div  className="navbar">
      <MenuItem to="/">Logo</MenuItem>
      <MenuItem to="/category">Shop</MenuItem>
      <MenuItem to='/test'>Cart</MenuItem>
      {authentication ? <MenuItem onClick={signout} to="/authentication">Logout</MenuItem> : <MenuItem to="/authentication">Login</MenuItem> }
    </div>
  );
};

var mapState = (store) => {
  return { authentication: store.authentication };
};
var actions = {
  signout  
}
export default connect(mapState, actions)(Navbar);
