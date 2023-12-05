// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx8rWKydrCc4SC5P67vklsMwD58jtykTQ",
  authDomain: "chatapp-98871.firebaseapp.com",
  projectId: "chatapp-98871",
  storageBucket: "chatapp-98871.appspot.com",
  messagingSenderId: "1994641525",
  appId: "1:1994641525:web:1687d7ea6ce0bf5832a83c",
  measurementId: "G-5910E17FQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);