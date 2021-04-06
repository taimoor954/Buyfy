import React, { useState } from "react";
import { connect } from 'react-redux';
import { uploadProducts } from '../../Redux/Products/productsAction';
import Cart from '../../Components/Cart/Cart';
import Header from '../../Components/Header/header';
import Paragraph from '../../Components/Paragraphs/paragraphs';
import Button from '../../Components/Buttons/Button';
import ProductCard from "../../Components/ProductCard/productCard";
import {openModal} from '../../Redux/Modal/modalActions'
import "./test.css"

const Test = ({uploadProducts, openModal}) => {
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
    <div className='test-css'>
      <h1>Test</h1>
      <Button onClick={()=>openModal({modalType:'testModal'})}>OPEN MODAL</Button>
      <Button onClick={()=>openModal({modalType:'addressFormModal'})}>OPEN address MODAL</Button>



      {/* <Cart/>  */}
      {/* <ProductCard/> */}
      {/* <Header>This is my header</Header>  */}

      {/* Resuing Component above and below  */}
      {/* <Header fontSize={30} fontWeight='light' color='red'>This is my header</Header>
      <Paragraph fontSize={28} fontWeight='light' color='blue'>Hey your Paragraph</Paragraph>
      <Paragraph fontSize={22} fontWeight='bold' color='green'>Hey your Paragraph</Paragraph>
      <Paragraph fontSize={18} fontWeight='light' color='blue'>Hey your Paragraph</Paragraph>
      <Button height={4} width={12} background='yellow' fontSize={32} color='white' fontWeight='light'>Click mee</Button> */}
    </div>


  );
};

var actions = {
    uploadProducts,
  openModal
  }

export default connect(null, actions)(Test);
  


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