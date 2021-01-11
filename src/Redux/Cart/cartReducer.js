import { productQuantityIncrement, productRemovalFromCart, deleteProductFromCart } from '../../Utility/productUtility/productUtility';
import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART, REMOVE_PRODUCT_FROM_CART } from './cartConstant';
var initialState = [];
var cartReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT_TO_CART: 
    return  productQuantityIncrement(state, payload.product)
    case REMOVE_PRODUCT_FROM_CART:
    return productRemovalFromCart(state, payload.productId)
    case DELETE_PRODUCT_FROM_CART: 
      return deleteProductFromCart(state, payload.productId)
    

    default:
      return state;
  }
};
export default cartReducer