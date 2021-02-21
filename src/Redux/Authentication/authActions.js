import {
  auth,
  firestore,
  serverTimestamp,
  googleAuthProvider,
} from "./../../Firebase/firebase";
import { SET_USER, REMOVE_USER } from "./constants";
import firebase from "./../../Firebase/firebase";

var setUser = (userDataForState) => (dispatch) => {
  //nonn async func can also be called using thunk
  try {
    dispatch({
      type: SET_USER,
      payload: {
        user: userDataForState,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

var removerUser = () => ({
  type: REMOVE_USER,
});

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
    var userDataForState = {
      fullName,
      email,
      createdAt: serverTimestamp,
      uid,
    };

    dispatch(setUser(userDataForState)); //if calling an action inside an action, use dispatch to call it
    //so that values can be sett in redux state
  } catch (error) {
    console.log(error);
  }
};

export var signin = (credentials) => async (dispatch) => {
  try {
    var { email, password } = credentials;
    var {
      user: { uid },
    } = await auth.signInWithEmailAndPassword(email, password);
    var userData = await firestore.collection("Users").doc(uid).get(); //find data with uid
    var { fullName, email: userEmail } = userData.data(); //data() use for fetching data //imp if you want to manipulate data coming from db
    var userDataForState = {
      fullName,
      email,
      uid,
    };
    dispatch(setUser(userDataForState));
    // console.log(userData)
  } catch (error) {
    console.log(error);
  }
};

export var signout = () => async (dispatch) => {
  //signout user from firebase
  await auth.signOut();
  dispatch(removerUser());
};

export var googleSignin = () => async (dispatch) => {
  try {
    //SIGNIN USER WITH FIREBASE AUTH GOOGLE
    var user = await auth.signInWithPopup(googleAuthProvider);
    var {
      user: { displayName, email, uid },
      additionalUserInfo: { isNewUser },
    } = user;
    //IF NEW USER ADD USER TO FIRE STORE AND SET IT TO REDUX STATE
    if (isNewUser) {
      var userInfo = {
        fullName: displayName,
        email,
        createdAt: serverTimestamp,
        uid,
      };
      await firestore.collection("Users").doc(uid).set(userInfo);
    }
    //ELSE DIRECTLT SET TO REDUX STATE
    var userDataForState = {
      fullName: displayName,
      email,
      createdAt: serverTimestamp,
      uid,
    };

    dispatch(setUser(userDataForState));

    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

//CENTRALISED AUTH STATE HANDLER
export var firebaseAuthListener = () => async (dispatch) => {
  //when refreshing the page user should remain still in sign in
  try {
    firebase.auth().onAuthStateChanged(async function (user) {
      //ITS A LISTENER
      if (user) {
        // User is signed in.
        var { uid } = user; 
        //FETCH USER DATA FROM FIRESTORE
        var query = await firestore.collection("Users").doc(uid).get(); //find data with uid
        // console.log(data)
        var { fullName, email } = query.data();
        console.log(uid);
        // SET TO REDUX STATE
        var userDataForState = {
          fullName,
          email,
          createdAt: serverTimestamp,
          uid,
        };
        dispatch(setUser(userDataForState));
      } else {
        // No user is signed in.
        console.log("No user sign in");
        dispatch(removerUser());
      }
    });
  } catch (error) {
    console.log(error);
  }
};
