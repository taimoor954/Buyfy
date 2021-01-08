import { productQuantityIncrement } from '../../Utility/productUtility/productUtility';
import { ADD_PRODUCT_TO_CART } from './cartConstant';
var initialState = [];
var cartReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT_TO_CART: 
    return  productQuantityIncrement(state, payload.product)
    default:
      return state;
  }
};
export default cartReducer