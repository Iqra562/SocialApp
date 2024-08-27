import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "./postThunk";

const initialState = {
    posts: JSON.parse(localStorage.getItem('allPosts')) || [], 
    loading: false,
    error: null, 
};


const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;  
                localStorage.setItem('allPosts',JSON.stringify(action.payload))
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default postsSlice.reducer;
