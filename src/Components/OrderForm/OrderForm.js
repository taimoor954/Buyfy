import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { auth } from './../../Firebase/firebase';

const OrderForm = ({ authentication }) => {
  //for shippment purpose
  console.log(authentication)

  var [email, setEmail] = useState("");
  var [name, setName] = useState("");
  var [phone, setPhone] = useState("");
  var [address, setAddress] = useState("");
  useEffect(() => {
    //CDM

    var { fullName, email, phone, address } = authentication;
    setName(fullName ? fullName : ""); //if fullname exist then full name else empty string
    setEmail(email ? email : ""); //if fullname exist then full name else empty string
    setPhone(phone ? phone : ""); //if fullname exist then full name else empty string
    setAddress(address ? address : ""); //if fullname exist then full name else empty string
  }, []);
  //Order form consist if
  //RECIVER FULL NAME
  //RECIVER FULL Email
  //RECIVER FULL address
  //RECIVER FULL phone

  var handleSubmit = (e) => {
    e.preventDefault();
    var shippingInfo = {
      name,
      email,
      address,
      phone,
    };
    console.log(shippingInfo);
  };
  return (
    <div>
      <h1> Order Form </h1>{" "}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <input
          placeholder="your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />{" "}
        <input
          placeholder="your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />{" "}
        <button type="submit"> Pay </button>{" "}
      </form>{" "}
    </div>
  );
};
var mapState = (store) => {
  return {
    authentication: store.authentication,
  };
};

export default connect(mapState)(OrderForm);
