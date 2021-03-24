import React from 'react'
import { connect } from 'react-redux';
import Checkoutlistitems from '../CheckoutListItems/checkoutlistitems';
import Paragraph from '../Paragraphs/paragraphs';
import "./checkoutlist.css"
const CheckoutList = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div className='checkoutList'>
            <div className='checkout-list-item checkout-list-item-extend' >
                <Paragraph fontSize={28} fontWeight='bold'>Product</Paragraph>
                <Paragraph fontSize={28} fontWeight='bold'>Quantity</Paragraph>
                <Paragraph fontSize={28} fontWeight='bold'>Price</Paragraph>
            </div>
            {cartItems.map((item)=> <Checkoutlistitems key={item.id} {...item} />)}
        </div> 
    )
}
var mapState = (store) => { 
return {cartItems  : store.cart}
}
export default connect(mapState)(CheckoutList)
