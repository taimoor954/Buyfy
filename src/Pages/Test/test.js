import React, { useState } from "react";
import { connect } from 'react-redux';
import { uploadProducts } from './../../Redux/Products/productsAction';
import Cart from './../../Components/Cart/Cart';

const Test = ({uploadProducts}) => {
  var [category, setCategory] = useState("");
  var [title, setTitle] = useState("");
  var [cost, setCost] = useState("");
  var [quantity, setQuantity] = useState("");
  var [description, setDescription] = useState("");
  var [coverPhoto, setCoverPhoto] = useState("");

  var handleSubmitForm = (e) => {
    e.preventDefault();
    var productObject = {
      category,
      title,
      cost,
      quantity,
      description,
      coverPhoto,
      createdAt : ""
    };
    uploadProducts(productObject)

  };
  return (
    <div>
      <h1>Test</h1>
      {/* <form onSubmit={handleSubmitForm}>
        <input
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          placeholder="category"
          type="text"
          value={category}
        ></input>
        <br />
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="title"
          type="text"
          value={title}
        ></input>
        <br />
        <input
          onChange={(e) => {
            setCost(e.target.value);
          }}
          placeholder="cost"
          type="text"
          value={cost}
        ></input> 
        <br />
        <input
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          placeholder="quantity"
          type="text"
          value={quantity}
        ></input>
        <br />
        <input
          onChange={(e) => {
            setCoverPhoto(e.target.files[0])
        }}
          placeholder="coverphoto"
          type="file"
          //value can not be changed in files manipulation
        ></input>
        <br />
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          cols="30"
          rows="10"
          placeholder="description"
          value={description}
        ></textarea>
        <button type='submit'>Submit</button>
      </form> */}
      <Cart/>
    </div>
  );
};

var actions = {
    uploadProducts
}

export default connect(null, actions)(Test);
  