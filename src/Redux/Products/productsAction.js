/* eslint-disable no-loop-func */
import { SET_PRODUCTS, CLEAR_PRODUCTS } from "./productConstants";
import { v4 as uuid } from "uuid";
import { firestore, storage } from "../../Firebase/firebase";
import { serverTimestamp } from "./../../Firebase/firebase";
import { categorizeProducts } from "../../Utility/productUtility/productUtility";

export const uploadProducts = (productObject) => async () => {
  try {
    // console.log(productObject);
    //SEND FILE TO STOREAGE AND GET DOWNLOAD URL
    var imageRef = storage.child(`products/img-${uuid()}`);
    var fileListener = imageRef.put(productObject.coverPhoto); //Listener
    // fileListener.on()  ON takes 4 param(eventType, cb for file upladoing state, cb for file uploading error, cb will triger after  file upload)

    fileListener.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      async () => {
        //will triger after file completetion
        //From here we will get donwload url
        var downloadURL = await imageRef.getDownloadURL();
        console.log(downloadURL);
        productObject.coverPhoto = downloadURL;
        productObject.createdAt = serverTimestamp;
        productObject.cost = parseFloat(productObject.cost);
        productObject.quantity = parseInt(productObject.quantity);
        console.log(productObject);
        await firestore.collection("Products").add(productObject);
      }
    );

    //MODIFY PRODUCT OBJECT WITH COVER PHOTO URL AND CRETATED AT

    //CREATE DOC IN FIRESTORE
  } catch (error) {
    console.log(error);
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    var products = [];
    const query = await firestore.collection("Products").get();
    query.docs.forEach((doc) => {
      products.push({...doc.data(), id:doc.id});
    });
    var categories = categorizeProducts(products); //ARRAY OF PRODUCTS
    //  console.log(categories)
    dispatch({
      type: SET_PRODUCTS,
      payload: {
        products,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoryProducts = (category) => async (dispatch) => {
  try {
    var products = [];
    const query = await firestore.collection("Products").where('category', '==', category).get();
    query.docs.forEach((doc) => {
      products.push({...doc.data(), id:doc.id});
    });
 //  console.log(categories)
 dispatch({
  type: SET_PRODUCTS,
  payload: {
    products,
  },
});  } catch (error) {
    console.log(error);
  }
};

export const clearProducts =()=> async (dispatch) => {
try {
  dispatch({
    type : CLEAR_PRODUCTS,

  })
} catch (error) {
  
}
}