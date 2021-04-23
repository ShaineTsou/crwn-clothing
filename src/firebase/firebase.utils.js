// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBs7jLgxlL-_xRMk9U9R3eR2I8AqFBJ9HU",
    authDomain: "owl-clothing-db21.firebaseapp.com",
    projectId: "owl-clothing-db21",
    storageBucket: "owl-clothing-db21.appspot.com",
    messagingSenderId: "411165256871",
    appId: "1:411165256871:web:fd7aec5e8c5cd8f0ba3f82",
    measurementId: "G-TXQ6V865JE"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Create an instance of the Google provider object
const provider = new firebase.auth.GoogleAuthProvider();

// Specify additional custom OAuth provider parameters to trigger the Google popup
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

