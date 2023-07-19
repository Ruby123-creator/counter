// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCCFuIalRa2c8HX5Kzl-H1nPQYTNaW_TI8",
  authDomain: "counter-button-86b77.firebaseapp.com",
  projectId: "counter-button-86b77",
  storageBucket: "counter-button-86b77.appspot.com",
  messagingSenderId: "309130110891",
  appId: "1:309130110891:web:fc4b10baa7f9cf2d6914ee",
  measurementId: "G-90PVFPVJKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseApp = initializeApp(firebaseConfig);
 export const auth = getAuth(FirebaseApp)
 export const db = getFirestore(FirebaseApp)