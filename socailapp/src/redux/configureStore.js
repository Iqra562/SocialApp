import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import createUserPostSlice from "./createUserPostSlice";
import postsSlice from "./postSlice"
const store =  configureStore({
    reducer:{
        auth :authSlice,
        createUserPost  : createUserPostSlice,
        allPosts : postsSlice
    }
})
export default store