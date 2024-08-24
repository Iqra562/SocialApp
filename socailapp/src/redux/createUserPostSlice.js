import { createSlice } from "@reduxjs/toolkit";
import { createUserPostThunk } from "./createUserPostThunk";

const initialState = {
    postCreated: false,
    loading: false,
    error: null, 
};

const createUserPostSlice = createSlice({
    name: "userPost",
    initialState,
    reducers:{
          resetPostCreatedState : (state)=>{
                  state.postCreated = false
          }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserPostThunk.pending, (state) => {
                state.loading = true;
                state.error = null; 
            })
            .addCase(createUserPostThunk.fulfilled, (state) => {
                state.loading = false;
                state.postCreated = true;
            })
            .addCase(createUserPostThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; 
            });
    },
});

export const {resetPostCreatedState} = createUserPostSlice.actions;
export default createUserPostSlice.reducer;
