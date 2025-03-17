// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; 
const firebaseConfig = {
  apiKey: "AIzaSyDi9XBugdmYerKJMn0VTwkNlFi-yQfPelk",
  authDomain: "socialapp-71b7f.firebaseapp.com",
  projectId: "socialapp-71b7f",
  storageBucket: "socialapp-71b7f.firebasestorage.app",
  messagingSenderId: "11888274677",
  appId: "1:11888274677:web:1183f30bde1884fb1d69bc",
  measurementId: "G-FTTMB96T2X"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);  
export const firestore = getFirestore(app);
