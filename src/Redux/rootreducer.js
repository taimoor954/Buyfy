import authReducer from "./Authentication/authReducer";
import {combineReducers} from 'redux'
import productReducer from "./Products/productReducer";
import cartReducer from "./Cart/cartReducer";

var rootReducer = combineReducers({
    authentication : authReducer,
    products : productReducer, //for category page display 
    cart : cartReducer
})

export default rootReducer