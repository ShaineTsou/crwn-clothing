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

// Create a piece of user information in the firestore database only when we get userAuth object, which means when the user signs in with Google
export const createUserProfileDocument = async (userAuth, additionalData) => {
  
  // If we don't get back userAuth object, then stop and exit this function
  if (!userAuth) {
    return;
  }

  // If we get userAuth object back, query inside the firestore database to see if this user data already exists by using the uid
  // It gives us a documentReference object which can then be used to get snapShot object by calling .get() method
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // The .exists property of the snapshot tells us whether this user information already exists in this path in the firestore database or not
  // If this user information does not, store it right at this path.
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {

      // Using .set() method upon documentReference to create document
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  // This createUserProfileDocument will always return the documentReference object back
  return userRef;
}
  
export const addCollectionAndDocuments = async (collectionKey, arrayOfObjectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  
  arrayOfObjectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, obj);
  })

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  // transformedCollections is an array, we want to convert it to an object, which is called 'data normalization'
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});

}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Create an instance of the Google provider object
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// Specify additional custom OAuth googleProvider parameters to trigger the Google popup
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;

