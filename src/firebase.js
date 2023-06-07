// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCxI-k1WFp7JlL7jnBL2Xi7PpwZP3vJFCk",
  authDomain: "instafeed-475c8.firebaseapp.com",
  databaseURL:
    "https://instafeed-475c8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "instafeed-475c8",
  storageBucket: "instafeed-475c8.appspot.com",
  messagingSenderId: "14305036200",
  appId: "1:14305036200:web:03586d717c3858db773f9d",
  measurementId: "G-0EQCVRR5G4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage;

export { auth, db, storage };
