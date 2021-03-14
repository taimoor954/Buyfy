import React from "react";
import { connect } from "react-redux";
import {
  addProductToCart,
  removalProductFromCartAction,
  deleteProductFromCartAction,
} from "../../Redux/Cart/cartActions";
import { Link } from "react-router-dom";
import "./productCard.css";
import Header from "../Header/header";
import "./../../App.css"

const ProductCard = ({
  deleteProductFromCartAction,
  removalProductFromCartAction,
  addProductToCart,
  ...product
}) => {
  var { title, cost, id } = product;

  return (
    <div className="product_Card center">
        <div className="product_cart_image"></div>
        <Header style={{alignSelf : "flex-start"}}  fontSize={15} fontWeight="bold">Product Name</Header>
     
     
     
     
     
      {/* <h1>
        <Link to={`product/${id}`}>{title}</Link> -{`$${cost}`}-
        <button
          onClick={() => {
            addProductToCart(product);
          }}
        >
          Add to cart
        </button>
      
      </h1> */}
    </div>
  );
};

var actions = {

  addProductToCart,
};

export default connect(null, actions)(ProductCard);
