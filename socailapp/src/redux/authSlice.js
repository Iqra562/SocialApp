import { createSlice } from "@reduxjs/toolkit"
import  {signUpUser,signUpWithGoogle,signInWithUserCredentials} from './authThunk'
const initialState ={
    user: null,
    loading:false,
    error:null,
    emailError :null,
    userNameError:null,
    googleSignUploading:false,
    googleSignUpError:null,
    isNewUser:false

}

const authSlice = createSlice({
    name:"auth" ,
    initialState,
    reducers: {
      resetEmailError: (state) => {
        state.emailError = null;
      },
      resetUsernameError: (state) => {
        state.userNameError = null; // Reset directly to null
      },
    },
    extraReducers :(builder)=>{
     builder
     .addCase(signUpUser.pending,(state)=>{
       state.loading = true;
        state.error = null;
        state.emailError = null;
        state.userNameError = null;
     })
     .addCase(signUpUser.fulfilled,(state,action)=>{
     state.loading = false;
     state.user = action.payload;
     state.isNewUser =action.payload.isNewUser ;

     })
     .addCase(signUpUser.rejected,(state,action)=>{
     state.loading = false;
     if (action.payload.code === 'email-already-in-use') {
      state.emailError = action.payload.message;
    }  else if (action.payload.code ==='username-already-in-use') {
      state.userNameError = action.payload.message;
    }else {
      state.error = action.payload.message;
    }

     })

     .addCase(signUpWithGoogle.pending, (state) => {
      state.googleSignUploading = true;
      state.googleSignUpError = null;
    })
    .addCase(signUpWithGoogle.fulfilled, (state, action) => {
      state.googleSignUploading = false;
      state.user = action.payload;
      state.isNewUser = action.payload.isNewUser;
    })
    .addCase(signUpWithGoogle.rejected, (state, action) => {
      state.googleSignUploading = false;
      // if (action.payload?.code === 'auth/user-already-exists') {
      //   state.googleSignUpError = action.payload.message;
      // } else {
        // }
        state.googleSignUpError = action.payload?.message || 'An error occurred';
    
    })
    .addCase(signInWithUserCredentials.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(signInWithUserCredentials.fulfilled, (state, action) => {
      console.log(action.payload,'payload')
      state.loading = false;
      state.user = action.payload;
      state.authenticated = true; 
    })
    .addCase(signInWithUserCredentials.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.authenticated = false;
    });
    }
})

export const {resetEmailError,resetUsernameError}  =authSlice.actions

export default authSlice.reducer;