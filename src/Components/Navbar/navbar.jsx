import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Header from "./../Header/header";
import { connect } from "react-redux";
import { signout } from './../../Redux/Authentication/authActions';

import Cart from "../Cart/Cart";

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
  var [isNavbarVisible, setNavbarVisibilty] =useState(false) 
  return (
    <div  className="navbar">
      <MenuItem to="/">Logo</MenuItem>
      <MenuItem to="/category">Shop</MenuItem>
      {/* <MenuItem to='/test'>Cart</MenuItem> */}
      <div>
      <Header
            style={{ cursor: "pointer", display: "inline" }}
            fontSize={31}
            fontWeight="bold"
            onClick={()=> setNavbarVisibilty(!isNavbarVisible)}
          >
            Cart
          </Header>
         {isNavbarVisible ?  <Cart/> : null}
      </div>
      <MenuItem to='/test'>Test</MenuItem>
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
