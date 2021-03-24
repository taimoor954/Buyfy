import React from 'react'
import { connect } from 'react-redux';
import Checkoutlistitems from '../CheckoutListItems/checkoutlistitems';
import "./checkoutlist.css"
const CheckoutList = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div className='checkoutList'>
            {cartItems.map((item)=> <Checkoutlistitems key={item.id} {...item} />)}
        </div> 
    )
}
var mapState = (store) => { 
return {cartItems  : store.cart}
}
export default connect(mapState)(CheckoutList)
