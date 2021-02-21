import { firestore, storage } from "../../Firebase/firebase";
import { serverTimestamp } from "./../../Firebase/firebase";
import history from './../../History/history';

export const generateOrder = () => async (dispatch, getState) => {
try { 
    var {cart:products, authentication} = getState()
    var orderInfo = {
        ...authentication,
        products,
        orderAt : serverTimestamp,
        orderStatus : 'pending'
    }
    var order = await firestore.collection('Orders').add(orderInfo)
    console.log(order.id)
    console.log(history)
    history.push(`/checkout/${order.id}`) //redirecting from action 
} catch (error) {
    console.log(error)
}
}