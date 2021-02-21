import React from 'react'
import { connect } from 'react-redux';
import Checkoutlistitems from '../CheckoutListItems/checkoutlistitems';

const CheckoutList = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div>
            <h1>Checkout List</h1>
            {cartItems.map((item)=> <Checkoutlistitems key={item.id} {...item} />)}
        </div> 
    )
}
var mapState = (store) => { 
return {cartItems  : store.cart}
}
export default connect(mapState)(CheckoutList)
