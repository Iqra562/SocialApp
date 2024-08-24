import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import createUserPostSlice from "./createUserPostSlice"
const store =  configureStore({
    reducer:{
        auth :authSlice,
        createUserPost  : createUserPostSlice
    }
})
export default store