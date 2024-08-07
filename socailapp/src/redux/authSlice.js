import { createSlice } from "@reduxjs/toolkit"
import  {signUpUser,signUpWithGoogle,signInWithUserCredentials} from './authThunk'
const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  userAuthenticationSuccessful: !!localStorage.getItem('user'),
  isNewUser: false,
  loading: false,
  error: null,
  emailError: null,
  userNameError: null,
  // sign up with google state 
  googleSignUploading: false,
  googleSignUpError: null,
  //user signIn state
  signInLoading : false,
  signInError:null,

  
};


const authSlice = createSlice({
    name:"auth" ,
    initialState,
    reducers: {
      resetEmailError: (state) => {
        state.emailError = null;
      }, 
      resetUsernameError: (state) => {
        state.userNameError = null; 
      },
      resetSignInError: (state) => {
        state.signInError = null; 
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
     state.userAuthenticationSuccessful = true;
     state.user = action.payload.userData;
     state.isNewUser =action.payload.isNewUser ;
     localStorage.setItem('user', JSON.stringify(action.payload.userData));
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
      state.isNewUser = action.payload.isNewUser;
      state.user = action.payload.userData;
      state.userAuthenticationSuccessful = true;
      localStorage.setItem('user', JSON.stringify(action.payload.userData));
    })
    .addCase(signUpWithGoogle.rejected, (state, action) => {
      state.googleSignUploading = false;
      state.googleSignUpError = action.payload?.message || 'An error occurred';
    })
    
    .addCase(signInWithUserCredentials.pending, (state) => {
      state.signInLoading = true;
      state.signInError = null;
    })
    .addCase(signInWithUserCredentials.fulfilled, (state, action) => {
      state.signInLoading = false;
      state.user = action.payload;
      state.userAuthenticationSuccessful = true;
        localStorage.setItem('user', JSON.stringify(action.payload));
    })
    .addCase(signInWithUserCredentials.rejected, (state, action) => {
      state.signInLoading = false;
      state.signInError = action.payload;
    });
    }
})

export const {resetEmailError,resetUsernameError,resetSignInError}  =authSlice.actions

export default authSlice.reducer;