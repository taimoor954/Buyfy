import React from 'react'
import { connect } from 'react-redux';
import { addProductToCart, removalProductFromCartAction,  deleteProductFromCartAction } from './../../Redux/Cart/cartActions';

const ProductCard = ({deleteProductFromCartAction,removalProductFromCartAction,addProductToCart,...product}) => {
    var {title, cost} = product
    
    return (
        <div>
            <h1>{title} -${cost}-<button onClick={()=> {addProductToCart(product)}} >Add to cart</button>
            <button onClick={()=> {removalProductFromCartAction(product.id)}}>Remove Cart</button>
            <button onClick={()=> {deleteProductFromCartAction(product.id)}}>Delete Cart</button>
            </h1>
        </div>
    )
}

var actions = {
    removalProductFromCartAction,
    addProductToCart,
    deleteProductFromCartAction
}

export default connect(null,actions)(ProductCard)
