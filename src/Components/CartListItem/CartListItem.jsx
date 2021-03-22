import React from 'react'
import { connect } from 'react-redux';
import { addProductToCart, removalProductFromCartAction, deleteProductFromCartAction } from '../../Redux/Cart/cartActions';
import Paragraph from '../Paragraphs/paragraphs';
import "./CartListItem.css"
const CartListItem = ({deleteProductFromCartAction,removalProductFromCartAction, addProductToCart,...product}) => {
    var {title, cost, quantity, id} = product
    return (
        <div className='cart-list-item'>
            <div className="cartItemImage"></div>
            <div className="cartItemDes">
                <Paragraph fontSize={18} fontWeight='semi-bold'>Prodcuct Title</Paragraph>
                <div style={{display:"flex", alignItems:"center"}}>
                <Paragraph style={{marginRight: "6px"}}>$40 X 3 = </Paragraph>
                <Paragraph fontSize={18} fontWeight='semi-bold' style={{marginLeft: "6px"}}> $120</Paragraph>
                </div>
            </div>
           
            {/* <h1>{title} - {cost} <button onClick={()=>deleteProductFromCartAction(id)}>x</button></h1>
           <h3><button onClick={()=>addProductToCart(product)}>+</button> {quantity} <button onClick={()=>removalProductFromCartAction(id)}>-</button></h3>  */}
        </div>
    )
} 
var actions = {
    addProductToCart,
    removalProductFromCartAction,
    deleteProductFromCartAction
}

export default connect(null,actions)(CartListItem)
