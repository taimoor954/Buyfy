import authReducer from "./Authentication/authReducer";
import {combineReducers} from 'redux'
import productReducer from "./Products/productReducer";
import cartReducer from "./Cart/cartReducer";
import modalReducer from "./Modal/modalReducer";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' //from here we can get local storage   
// import storage from 'redux-persist/lib/storage/session' //from here we can get sessoin storage   

const presistConfig = {
    key: 'root', //tells the level
    storage, //local ya session storage
    whitelist:['auth']
}

var rootReducer = combineReducers({
    authentication : authReducer,
    products : productReducer, //for category page display 
    cart : cartReducer,
    modal:modalReducer
})

export default persistReducer(presistConfig,rootReducer)