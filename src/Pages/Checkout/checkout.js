import React from "react";
import CheckoutList from "./../../Components/CheckoutList/checkoutlist";
import { connect } from "react-redux";
import { orderTotalCalculation } from "./../../Utility/checkout";

const Checkout = ({total}) => {
    console.log(total)
    return (
    <div>
      <h1>Checkout page</h1>
      <CheckoutList />
      <button>Pay Now {total}</button>
    </div>
  );
};

var mapState = (store) => {
  return { total: orderTotalCalculation(store.cart) };
};
export default connect(mapState, null)(Checkout);
