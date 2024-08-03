import { createSlice } from "@reduxjs/toolkit"
import  {signUpUser} from './authThunk'
const initialState ={
    user: null,
    loading:false,
    error:null
}

const authSlice = createSlice({
    name:"auth" ,
    initialState,
    reducers:{},
    extraReducers :(builder)=>{
     builder
     .addCase(signUpUser.pending,(state)=>{
   state.loading = true;
   state.error = false;
     })
     .addCase(signUpUser.fulfilled,(state,action)=>{
     state.loading = false;
     state.user = action.payload;

     })
     .addCase(signUpUser.rejected,(state,action)=>{
     state.loading = false;
     state.error = action.payload;

     })
    }
})

export default authSlice.reducer;