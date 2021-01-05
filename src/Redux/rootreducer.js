import authReducer from "./Authentication/authReducer";
import {combineReducers} from 'redux'
import productReducer from "./Products/productReducer";

var rootReducer = combineReducers({
    authentication : authReducer,
    products : productReducer //for category page display 
})

export default rootReducer