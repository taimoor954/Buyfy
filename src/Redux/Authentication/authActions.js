import { auth, firestore, serverTimestamp } from "./../../Firebase/firebase";
import { SET_USER } from "./constants";

export var signup = (credentials) => async (dispatch) => {
  var { email, password, fullName } = credentials;
  try {
    //CREATE USER ON FIREBASE AUTH SECTION //ye ek user obj return karay ga humnay user say uid nikalli
    var {
      user: { uid },
    } = await auth.createUserWithEmailAndPassword(email, password);

    //SAVE USER DATA TO FIRESTORE
    var userInfo = {
      fullName,
      email,
      password,
      createdAt: serverTimestamp,
      uid,
    };
    await firestore.collection("Users").doc(uid).set(userInfo);
    //Setting up redux state
    var userDateForState = {
      fullName,
      email,
      createdAt: serverTimestamp,
      uid,
    };
    dispatch({
      type: SET_USER,
      payload: {
        user: userDateForState,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
