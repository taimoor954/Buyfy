import firebase  from "firebase/app";
import "firebase/auth"; //for sign in email and sign in with google
import "firebase/firestore"; //for DB
var firebaseConfig = {
  apiKey: "AIzaSyAo1fbFio_f-TlLMEXSV-t6LWDh1fc8-Wk",
  authDomain: "buyfy-77696.firebaseapp.com",
  projectId: "buyfy-77696",
  storageBucket: "buyfy-77696.appspot.com",
  messagingSenderId: "851927155712",
  appId: "1:851927155712:web:9a22dcb0d4546baf0404e5",
};

firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore();
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//Time of user created respective to server time
export var serverTimestamp = firebase.firestore.FieldValue.serverTimestamp() //return flag //kinda nishani

export default firebase;
