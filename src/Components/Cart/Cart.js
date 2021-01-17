import React from 'react'
import CartList from './../CartList/CartList';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div>
            <h1>Cart</h1>
            <CartList/>
            <Link to="/checkout"><button >Checkout</button></Link>
        </div>
    )
}
    
export default Cart 
