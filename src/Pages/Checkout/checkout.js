import React, {useState} from "react";
import CheckoutList from "./../../Components/CheckoutList/checkoutlist";
import { connect } from "react-redux";
import { orderTotalCalculation } from "./../../Utility/checkout";
import OrderForm from './../../Components/OrderForm/OrderForm';


const Checkout = ({total}) => {
    var [OrderFormDisplay, setOrderFormDisplay] = useState(false)
    console.log(total)
    return (
    <div>
      <h1>Checkout page</h1>
      <CheckoutList />
      <h1>Total Amount - {total}</h1>
     {OrderFormDisplay && <OrderForm/>} 
     {/* if true then display Order else dont display */}
      <button onClick={(e) => setOrderFormDisplay(!OrderFormDisplay)}>Proceed & Pay {total}</button> 
      {/* iff true tou false hojayegi if false then true hojayegi from above code */}
    </div>
  );
};

var mapState = (store) => {
  return { total: orderTotalCalculation(store.cart) };
};
export default connect(mapState, null)(Checkout);
