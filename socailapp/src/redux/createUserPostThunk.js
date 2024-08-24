import { createAsyncThunk } from "@reduxjs/toolkit";
import { storage, firestore } from "../config/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export const createUserPostThunk = createAsyncThunk(
  'create/userPost',
  async (data, { rejectWithValue }) => {
    const { title, file, userId, setValue, setFile, setSelectedImage } = data;
    try {
      const fileRef = ref(storage, `posts/${file.name}`);
      await uploadBytes(fileRef, file);
      const fileUrl = await getDownloadURL(fileRef);

      const postRef = doc(collection(firestore, 'UserPosts'));
      const postId = postRef.id;

      await setDoc(postRef, {
        id: postId,
        title,
        imageUrl: fileUrl,
        userId,
        createdAt: new Date(),
      });

      // Clear  form
      setValue('title', '');
      setFile(null);
      setSelectedImage(null);

      console.log("Post successfully created!");

    } catch (error) {
      console.error("Error uploading file or creating document:", error);
      return rejectWithValue(error.message);
    }
  }
);
