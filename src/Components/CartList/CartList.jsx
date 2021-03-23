import React from 'react'
import CartListItem from '../CartListItem/CartListItem'
import { connect } from 'react-redux';
import "./CartList.css"
const CartList = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div className='cart-list'>
            {/* <h1>Cart List</h1> */}
            {cartItems.map((item)=> <CartListItem key={item.id} {...item} />)}
           
        </div> 
    )
}
var mapState = (store) => { 
return {cartItems  : store.cart}
}
export default connect(mapState)(CartList)
