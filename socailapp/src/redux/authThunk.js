import {createAsyncThunk} from "@reduxjs/toolkit";
import { getAuth,createUserWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { setDoc ,doc, collection, getDocs, query, where, getDoc} from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { auth } from "../config/firebaseConfig";
// import { auth, GoogleAuthProvider, signInWithPopup,  } from "../config/firebaseConfig";
export const collectionName = "Users"

export const signUpUser = createAsyncThunk('auth/signUpUser',

    async(data,{rejectWithValue})=>{
        const {name, username,email,password} =data;
        const auth= getAuth();

        try{
              const User =  collection(db,'Users');
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

        }catch(err){
          if(err.code === 'auth/email-already-in-use'){
           return rejectWithValue({ code: 'email-already-in-use', message: 'This email is already in use.' })
        }
          else if(err.code ==='username-already-in-use'){
           return rejectWithValue({ code:'username-already-in-use', message: 'This user is already in use.' })
        }

            return rejectWithValue({ code: err.code, message: err.message })
        }

    }
)


export const signUpWithGoogle = createAsyncThunk('auth/signUpWithGoogle',
    async (_, { rejectWithValue }) => {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const userRef = doc(collection(db, 'Users'), user.uid);
  
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
          return rejectWithValue({ code: 'auth/user-already-exists', message: 'User already exists' });
        }else{

          const userData = {
            userId: user.uid,
            name: user.displayName,
            username: user.displayName,
            email: user.email,
            createdAt: new Date().toISOString(),
          };
          await setDoc(doc(collection(db, collectionName), user.uid), userData);
          return userData;
        }
      } catch (err) {
         if (err.code === 'auth/account-exists-with-different-credential') {
          console.log("exisrs")
          return rejectWithValue({ code: err.code, message: 'Account exists with different credentials' });
        } else {
          return rejectWithValue({ code: err.code, message: err.message });
        }
      }
    }
  );