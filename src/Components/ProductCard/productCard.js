import React from 'react'
import { connect } from 'react-redux';
import { addProductToCart } from './../../Redux/Cart/cartActions';

const ProductCard = ({addProductToCart,...product}) => {
    var {title, cost} = product
    return (
        <div>
            <h1>{title} -${cost}-<button onClick={()=> {addProductToCart(product)}} >Add to cart</button></h1>
        </div>
    )
}

var actions = {
    addProductToCart
}

export default connect(null,actions)(ProductCard)
