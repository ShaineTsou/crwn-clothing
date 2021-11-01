import firebase from "firebase/app";

// Add the Firebase products
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs7jLgxlL-_xRMk9U9R3eR2I8AqFBJ9HU",
  authDomain: "owl-clothing-db21.firebaseapp.com",
  projectId: "owl-clothing-db21",
  storageBucket: "owl-clothing-db21.appspot.com",
  messagingSenderId: "411165256871",
  appId: "1:411165256871:web:fd7aec5e8c5cd8f0ba3f82",
  measurementId: "G-TXQ6V865JE",
};

// Create user information in the firestore when getting userAuth, and return documentReference object
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // Exit the function when no userAuth is passed as argumet
  if (!userAuth) {
    return;
  }

  // Query existing user data using uid
  // Then use returned user documentReference object to get snapShot object
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // Create user documentReference object if it does not exist in firestore
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  arrayOfObjectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  arrayOfObjectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // Convert transformedCollections into an object
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
