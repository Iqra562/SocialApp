import {createAsyncThunk} from "@reduxjs/toolkit";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc ,doc, collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../config/firebaseConfig";

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