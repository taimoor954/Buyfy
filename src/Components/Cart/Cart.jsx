import React from 'react'
import CartList from '../CartList/CartList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { generateOrder } from '../../Redux/Orders/orderActions';
import "./Cart.css"
import Header from '../Header/header';
import Button from '../Buttons/Button';

const Cart = ({generateOrder}) => {
    return (
        <div className='cart'>
            <Header fontWeight='bold' fontSize={28} style={{letterSpacing: '9px'}}>CART </Header>
            <CartList/>
            {/* <button onClick={generateOrder} >Checkout</button> */}
            <Button onClick={generateOrder} fontWeight='bold' background='rgba(0,0,0,0.6)' fontSize={28} style={{letterSpacing: '9px', width:'100%'}}>Checkout</Button>
        </div>
    )
}
var actions = {
    generateOrder
}    
export default connect(null, actions)(Cart) 
