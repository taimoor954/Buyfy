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
import Button from "../Buttons/Button";

const ProductCard = ({
  deleteProductFromCartAction,
  removalProductFromCartAction,
  addProductToCart,
  ...product
}) => {
  var { title, cost, id } = product;

  return (
    <div className="product_Card center">
        <div className="product_card_hover center">
            <Button>Add to cart</Button>
        </div>
        <div className="product_cart_image"></div>

        <Header style={{alignSelf : "flex-start", marginTop:"0.5em"}}  fontSize={18} fontWeight="bold">Product Name</Header>
        <Header style={{alignSelf : "flex-start"}}  fontSize={20} fontWeight="regular">$40</Header>
     
     
     
     
     
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
