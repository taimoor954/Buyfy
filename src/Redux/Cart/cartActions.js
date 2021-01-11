import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_CART,
} from "./cartConstant";
export var addProductToCart = (product) => async (dispatch) => {
  try {
    console.log(product);
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: {
        product,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export var removalProductFromCartAction = (productId) => async (dispatch) => {
  try {
    console.log("Hello");
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      payload: {
        productId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export var deleteProductFromCartAction = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_PRODUCT_FROM_CART,
      payload: {
        productId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
