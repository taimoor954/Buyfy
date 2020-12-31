import { SET_USER } from './constants';
var initialState = null
var authReducer = (state=initialState, actions) =>{
var {type, payload} = actions

switch (type) {
    case SET_USER:
        return state = payload.user

    default:
        return state;
}
}
export default authReducer