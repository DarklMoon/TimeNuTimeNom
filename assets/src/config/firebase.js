// Import the functions you need from the SDKs you need
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
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const eventRef = collection(db, 'events')
export const categoryRef = collection(db, "categories");
export const patternRef = collection(db, "patterns");
export default app;