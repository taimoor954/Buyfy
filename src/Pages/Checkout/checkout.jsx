import React, {useState} from "react";
import CheckoutList from "../../Components/CheckoutList/checkoutlist";
import { connect } from "react-redux";
import { orderTotalCalculation } from "../../Utility/checkout";
import Header from '../../Components/Header/header.jsx' 
import OrderForm from '../../Components/OrderForm/OrderForm';
import './checkout.css'
import Button from "../../Components/Buttons/Button";

const Checkout = ({total}) => {
    var [OrderFormDisplay, setOrderFormDisplay] = useState(false)
    console.log(total)
    return (
    <div className='checkout-page-container'>
      <div className='checkout'>
      <Header style={{letterSpacing:'4px'}} fontSize={60} fontWeight='bold'>Shopping Cart</Header>
      <CheckoutList />
      <div className='checkoutBottomContent'>
      <Header style={{letterSpacing:'4px'}} fontSize={60} fontWeight='bold'>Total Price: {total}</Header>
      <Button additionalStyle={{justifySelf:'end', borderRadius:'20px'}} fontSize={28} fontWeight='bold' background='white' color='black'>Proceed And Pay</Button> 

      </div>
      {/* <h1>Total Amount - {total}</h1> */}
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
