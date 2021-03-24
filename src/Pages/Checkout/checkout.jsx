import React, {useState} from "react";
import CheckoutList from "../../Components/CheckoutList/checkoutlist";
import { connect } from "react-redux";
import { orderTotalCalculation } from "../../Utility/checkout";
import OrderForm from '../../Components/OrderForm/OrderForm';
import './checkout.css'

const Checkout = ({total}) => {
    var [OrderFormDisplay, setOrderFormDisplay] = useState(false)
    console.log(total)
    return (
    <div className='checkout-page-container'>
      <div className='checkout'>
      <h1>Checkout page</h1>
      <CheckoutList />
      <h1>Total Amount - {total}</h1>
     {/* {OrderFormDisplay && <OrderForm/>}  
 <button onClick={(e) => setOrderFormDisplay(!OrderFormDisplay)}>Proceed & Pay {total}</button>  */}

     {/* if true then display Order else dont display */}
      {/* iff true tou false hojayegi if false then true hojayegi from above code */} 
      </div>
    </div>
  );
};

var mapState = (store) => {
  return { total: orderTotalCalculation(store.cart) };
};
export default connect(mapState, null)(Checkout);
