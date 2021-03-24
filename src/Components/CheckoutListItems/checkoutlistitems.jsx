import React from 'react'
import { connect } from 'react-redux';
import Paragraph from "../../Components/Paragraphs/paragraphs.jsx"
import Button from "../../Components/Buttons/Button.jsx"
// import Paragraph from "../Paragraphs"
import { addProductToCart, removalProductFromCartAction, deleteProductFromCartAction } from '../../Redux/Cart/cartActions';
import "./checkoutlistitems.css"
const Checkoutlistitems = ({deleteProductFromCartAction,removalProductFromCartAction, addProductToCart,...product}) => {
    var {title, cost, quantity, id} = product
    return (
        <div className='checkout-list-item'>
        <div className='checkout-item-product'>
            <div className="checkout-item-product-image"></div>
            <Paragraph fontSize={24} fontWeight='semi-bold'>My product</Paragraph>                
        </div>    
        <div className='checkout-item-quantity center' style={{flexFlow:'row'}}>
            <Button fontWeight='bold' color='black' background='white' additionalStyle={{borderTopLeftRadius :"20px", borderBottomLeftRadius:'20px' , transform:'translateX(5px)'}} >+</Button>
            <Button fontWeight='bold' color='black' background='white' additionalStyle={{borderRadius :"0px"}}>3</Button>  
            <Button fontWeight='bold' color='black' background='white' additionalStyle={{borderTopRightRadius :"20px", borderBottomRightRadius:'20px', transform:'translateX(-5px)'}}>-</Button>
        </div>    
        <div className='checkout-item-price center'>
            <Paragraph fontWeight='semi-bold' fontSize={20}>$240</Paragraph>
            </div>    
        <div className='checkout-item-cross center'>
        <Paragraph AdditionalStyle={{cursor:"pointer"}} fontWeight='bold' fontSize={30}>X</Paragraph>
            </div>    


            {/* <h1>{title} - {cost} <button onClick={()=>deleteProductFromCartAction(id)}>x</button></h1>
           <h3><button onClick={()=>addProductToCart(product)}>+</button> {quantity} <button onClick={()=>removalProductFromCartAction(id)}>-</button></h3> 
     */}
        </div>
    )
} 
var actions = {
    addProductToCart,
    removalProductFromCartAction,
    deleteProductFromCartAction
}

export default connect(null,actions)(Checkoutlistitems)
