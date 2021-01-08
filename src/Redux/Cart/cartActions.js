import { ADD_PRODUCT_TO_CART } from './cartConstant';
export var addProductToCart = (product) => async (dispatch) => {
try {
    console.log(product)
    dispatch({
        type : ADD_PRODUCT_TO_CART,
        payload : {
            product
        }
    })
} catch (error) {
    console.log(error)
}
}