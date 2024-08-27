import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { firestore } from "../config/firebaseConfig";

const PostsCollection = "UserPosts";
const UserCollection = "Users";

export const getAllPosts = createAsyncThunk(
  'getAllPosts',
  async (_, { rejectWithValue }) => {  
    try {
      const postsSnapshot = await getDocs(collection(firestore, PostsCollection));

      const postsData = await Promise.all(
        postsSnapshot.docs.map(async (postDoc) => {
          const post = postDoc.data();
          
          const userRef = doc(firestore, UserCollection, post.userId);
          const userSnapshot = await getDoc(userRef);

          if (userSnapshot.exists()) {
            const user = userSnapshot.data();
            return {
              ...post,
              userName: user.username,
              createdAt: post.createdAt?.toMillis(),
            };
           }
          else {
            return {
              ...post,
              userName: "Unknown User",
            };
          }
        })
      );

      return postsData;
      
    } catch (error) {
      console.error("Error fetching posts or users:", error);
      return rejectWithValue(error.message);
    }
  }
);
