import authReducer from "./Authentication/authReducer";
import {combineReducers} from 'redux'

var rootReducer = combineReducers({
    authentication : authReducer
})

export default rootReducer