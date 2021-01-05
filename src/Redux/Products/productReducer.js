import { SET_PRODUCTS } from './productConstants';
var initalState= []
var productReducer= (state=initalState, actions) => {
var {type,payload} =actions
switch (type) {
    case SET_PRODUCTS:
            return [...state, ...payload.products]
        break;

    default:
        return state;
}
}
export default productReducer