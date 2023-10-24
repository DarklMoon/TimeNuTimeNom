// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7BlpJlzMdPYjVnD-_M0jUtNjnrEWAzYQ",
  authDomain: "timenutimenom.firebaseapp.com",
  projectId: "timenutimenom",
  storageBucket: "timenutimenom.appspot.com",
  messagingSenderId: "837747271277",
  appId: "1:837747271277:web:f00497ddb3706d8d98c164",
  measurementId: "G-78VV0QD69S",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const initDB = initializeApp(firebaseConfig);
export const db = getFirestore(initDB);
// const analytics = getAnalytics(initDB);

export const auth = getAuth(initDB);

export const eventRef = collection(db, 'events')
export const categoryRef = collection(db, "categories");
export const patternRef = collection(db, "patterns");
console.log("FIREBASE_DB_ROOT: ", firebase);
export default firebase;