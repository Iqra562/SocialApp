import {createAsyncThunk} from "@reduxjs/toolkit";
import { getAuth,createUserWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";
import { setDoc ,doc, collection, getDocs, where, getDoc, query} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { auth } from "../config/firebaseConfig";
// import { auth, GoogleAuthProvider, signInWithPopup,  } from "../config/firebaseConfig";
export const collectionName = "Users"

export const signUpUser = createAsyncThunk('auth/signUpUser',

    async(data,{rejectWithValue})=>{
        const {name, username,email,password} =data;
        const auth= getAuth();

        try{
              const User =  collection(db,collectionName);
              const q = query(User,where('username','==',username));
              const querySnapshot = await getDocs(q);
              if(!querySnapshot.empty){
                              return rejectWithValue({ code: 'username-already-in-use', message: 'This username is already in use.' })
              }

            const UserCredential = await createUserWithEmailAndPassword(auth,email,password)
            const user = UserCredential.user;
            const userData = { 
                userId:user.uid,
                name,
                username,
                email,
                createdAt:new Date().toISOString(),
            }

            await setDoc(doc(db,collectionName,user.uid),userData)
return{
  userData,
  isNewUser:true
}
        }catch(err){
          if(err.code === 'auth/email-already-in-use'){
           return rejectWithValue({ code: 'email-already-in-use', message: 'This email is already in use.' })
        }
          else if(err.code ==='username-already-in-use'){
           return rejectWithValue({ code:'username-already-in-use', message: 'This user is already in use.' })
        }else{

          
          return rejectWithValue({ code: err.code, message: err.message })
        }
        }

    }
)


export const signUpWithGoogle = createAsyncThunk('auth/signUpWithGoogle',
    async (_, { rejectWithValue }) => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const userRef = doc(collection(db, collectionName), user.uid);
  
        const userDoc = await getDoc(userRef);
         
        if (userDoc.exists()) {
          return {
            userData: userDoc.data(),
            isNewUser: false
          };
        }else{

          const userData = {
            userId: user.uid,
            name: user.displayName,
            username: user.email.split('@')[0],
            email: user.email,
            createdAt: new Date().toISOString(),
            
          };
          await setDoc(doc(collection(db, collectionName), user.uid), userData);
          return {
            userData,
             isNewUser: true

          }
        }
      } catch (err) {
          return rejectWithValue({ code: err.code, message: err.message });
      }
    }
  );


  // signIn with user's credentials 
  export const signInWithUserCredentials = createAsyncThunk('auth/signInWithUserCredential', async (data, { rejectWithValue }) => {
    const auth = getAuth();
    const { email, password } = data;
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      const usersCollection = collection(db, collectionName);
      const q = query(usersCollection, where('email', '==', email));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data(); 
        return {
          ...userData,
        };
      } 
    } catch (err) {
     
      return rejectWithValue({code:err.code,message : err.message})
    }
  });
// signIn with Google pop up
export const signInWithGoogle = createAsyncThunk(
  'auth/signInWithGoogle',
  async (_, { rejectWithValue }) => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const email = user.email;

      // Query Firestore to check if the user exists
      const usersCollection = collection(db, 'users'); // Use your collection name
      const q = query(usersCollection, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // User found in Firestore, return the existing user data
        const userData = querySnapshot.docs[0].data();
        return {
          ...userData,
        };
      } else {
        // User not found in Firestore, reject the sign-in
        return rejectWithValue({ code: 'auth/user-not-found', message: 'User does not exist' });
      }
    } catch (err) {
      return rejectWithValue({ code: err.code, message: err.message });
    }
  }
);
