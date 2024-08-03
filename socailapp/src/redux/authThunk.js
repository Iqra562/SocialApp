import {createAsyncThunk} from "@reduxjs/toolkit";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc ,doc} from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const collectionName = "Users"

export const signUpUser = createAsyncThunk('auth/signUpUser',

    async(data,{rejectWithValue})=>{
        const {name, username,email,password} =data;
        const auth= getAuth();

        try{
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
            return rejectWithValue(err.message)
        }

    }
)