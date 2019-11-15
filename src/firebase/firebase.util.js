import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAYgHTFgvjE__1hSwq9RZhB1wcTmZMhllk",
  authDomain: "crown-clothing-2257f.firebaseapp.com",
  databaseURL: "https://crown-clothing-2257f.firebaseio.com",
  projectId: "crown-clothing-2257f",
  storageBucket: "crown-clothing-2257f.appspot.com",
  messagingSenderId: "883074720434",
  appId: "1:883074720434:web:b63da59f7aea5053135fab",
  measurementId: "G-G0NFWZN51V"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
