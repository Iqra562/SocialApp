// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5h4U4H8RzXBvg5iBZYqphDoyHQSrZ430",
  authDomain: "sociallapp-3611.firebaseapp.com",
  projectId: "sociallapp-3611",
  storageBucket: "sociallapp-3611.appspot.com",
  messagingSenderId: "364343281633",
  appId: "1:364343281633:web:5c504e13e7f2ba57c9b4a0",
  measurementId: "G-6F53ZBRH79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
