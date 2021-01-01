import { SET_USER,REMOVE_USER } from './constants';
var initialState = null
var authReducer = (state=initialState, actions) =>{
var {type, payload} = actions

switch (type) {
    case SET_USER:
        return state = payload.user
    case REMOVE_USER:
        return state = null

    default:
        return state;
}
}
export default authReducer