// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPHvAwhe5ubW6YXgcFg8eibcau-PttoPU",
  authDomain: "onionmap-4943d.firebaseapp.com",
  projectId: "onionmap-4943d",
  storageBucket: "onionmap-4943d.firebasestorage.app",
  messagingSenderId: "754418655412",
  appId: "1:754418655412:web:3cbcf30e747d88ec4537e1",
  measurementId: "G-B8WQTDD133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup };