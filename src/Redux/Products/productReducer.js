import { CLEAR_PRODUCTS, SET_PRODUCTS } from './productConstants';
var initalState= []
var productReducer= (state=initalState, actions) => {
var {type,payload} =actions
switch (type) {
    case SET_PRODUCTS:
            return [...payload.products] //ager [...state, payload.product] karengay tou prev + new ainegay
            //her page reload per new + previous display hongay
    case CLEAR_PRODUCTS:
            return [] 

    default:
        return state;
}
}
export default productReducer