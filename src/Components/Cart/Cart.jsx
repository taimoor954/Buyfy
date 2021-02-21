import React from 'react'
import CartList from '../CartList/CartList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { generateOrder } from '../../Redux/Orders/orderActions';

const Cart = ({generateOrder}) => {
    return (
        <div>
            <h1>Cart</h1>
            <CartList/>
            <button onClick={generateOrder} >Checkout</button>

        </div>
    )
}
var actions = {
    generateOrder
}    
export default connect(null, actions)(Cart) 
