// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; 
const firebaseConfig = {
  apiKey: "AIzaSyCumeHemVcJwiguJ_PX0XphRKMPnQ-sTwc",
  authDomain: "socailllapp.firebaseapp.com",
  projectId: "socailllapp",
  storageBucket: "socailllapp.appspot.com",
  messagingSenderId: "136564658329",
  appId: "1:136564658329:web:40383f207af79a2baca808",
  measurementId: "G-VF7S9W49DB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);  
export const firestore = getFirestore(app);