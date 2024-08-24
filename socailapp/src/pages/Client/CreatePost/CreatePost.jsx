import React, { useState, useContext, useEffect } from "react";
import { Box, styled, TextField, Typography, Button, CircularProgress } from "@mui/material";
import colors from "../../../ThemeProvider/color";
import ThemeSwitcherContext from "../../../context/ThemeSwitcherContext/ThemeSwitcherContext";
import { icons } from "../../../utils/icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {firestore,storage} from '../../../config/firebaseConfig'
import { createUserPostThunk } from "../../../redux/createUserPostThunk";
import { useDispatch, useSelector } from "react-redux";
import { TiTick } from "react-icons/ti";
import {resetPostCreatedState} from "../../../redux/createUserPostSlice"
import useResponsive from '../../../utils/useResponsive.js'


const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: `2px solid ${colors[theme.palette.mode].border}`, 
    },
    '&:hover fieldset': {
      borderColor: '#b1afaffa', 
    },
    '&.Mui-focused fieldset': {
      borderColor: '#e1dddd', 
    },
  },
}));
const UploadButton = styled(Button)(({ theme }) => ({
  backgroundColor: colors[theme.palette.mode].border,
  '&:hover': {
    backgroundColor: colors[theme.palette.mode].border, 
  }
}));
const PostButton = styled(Button)(({ theme }) => ({
  backgroundColor: colors[theme.palette.mode].formbtn,
  color: "white",
  '&:hover': {
    backgroundColor: colors[theme.palette.mode].formbtn, 
  }
}));

function CreatePost() {
  const { mode } = useContext(ThemeSwitcherContext);
  const { uploadImage: UploadImage } = icons;
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const {user} = useSelector((state)=>state.auth);
  const navigate = useNavigate();
  const {postCreated,loading} = useSelector((state)=>state.createUserPost);
  const [showMessage,setShowMessage]  = useState(false);
  const dispatch = useDispatch();
  const {isSmallScreen,isMdScreen} = useResponsive();
  const onSubmit = async (data) => {
    const { title } = data;
    const { userId } = user;
    const postData = {
      title,
      file,
      userId,
      setValue,
      setFile,
      setSelectedImage
    }
  
    if (!file) {
      console.error("File or user is missing.");
      return;
    }
 
  dispatch(createUserPostThunk(postData))
  }
  
  useEffect(()=>{
if(postCreated){
  setShowMessage(true);
  setTimeout(() => {
    setShowMessage(false);
    navigate("/"); 
  }, 3000);
  dispatch(resetPostCreatedState())
}
  },[postCreated])
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) { 
      setFile(file); 
      setSelectedImage(URL.createObjectURL(file)); 
    } else {
      console.error("Please select a valid image file.");
    }
  };
  return (
    <Box sx={{ height: "100%", display: "flex", justifyContent: "center", backgroundColor: colors[mode].background, paddingY: "50px"  }}>
      <Box sx={{ width: "100%",       paddingX: isSmallScreen ? '12%' :isMdScreen ? '15%' : '25%', }}>
        {showMessage && (

        
      <Box
  sx={{
    display: "flex",
    justifyContent: "center",
  
  }}
>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",  backgroundColor: colors[mode].background,
    boxShadow: `2px 2px 2px ${colors[mode].shadow}`,padding:"10px",borderRadius:"5px"}}>

    <TiTick  style={{ color: "white", fontSize: "15px" ,backgroundColor:"green",borderRadius:"100%",marginRight:"2px"}} />
    
    <Typography sx={{color : colors[mode].text}}>post created successfully</Typography>
        </Box>
 
      </Box>
        )
}
        <Typography variant="h6" sx={{ color: colors[mode].text }}>
          Create Post
        </Typography>
        <Box sx={{ width: "100%", marginTop: '20px' }}>
          <form onSubmit={handleSubmit(onSubmit)}> 
            <Box>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ color: "#838080" }}>
                  Title
                </Typography> 
                <CustomTextField 
                  size="small" 
                  {...register("title", { required: 'Title is required' })}
                />
                {errors.title && (
                  <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "6px" }}>
                    {errors.title.message}
                  </span>
                )}
              </Box>
              <Box sx={{ width: "100%", marginTop: '20px' }}>
                <Typography sx={{ color: "#838080" }}>
                  Select file to upload
                </Typography>
              {!selectedImage && (
                  <Box
                    sx={{
                      border: `1px solid ${colors[mode].border}`,
                      backgroundColor: colors[mode].border,
                      borderRadius: '4px',
                      height: '400px',
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column"
                    }}
                  >
                    <UploadButton variant="contained" sx={{ backgroundColor: colors[mode].border }} component="label">
                      <UploadImage style={{ color: colors[mode].icon }} />
                      <Typography sx={{ color: colors[mode].text }}>
                        Upload File
                      </Typography>
                      <input
                        type="file"
                        hidden
                      
                        {...register("file", { required: 'File is required' })}
                        onChange={handleImageChange}
                      />
                    </UploadButton>
                    {errors.file && (
                      <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "6px" }}>
                        {errors.file.message}
                      </span>
                    )}
                  </Box>
              )}
                {selectedImage && (
                  <Box sx={{ marginTop: '20px', borderRadius: "5px", overflow: "hidden" }}>
                    <img src={selectedImage} alt="Selected" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
                  </Box>
                )}
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", marginTop: "20px" }}>
              <PostButton variant="contained" type="submit"   disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Post'}
              </PostButton>

          


            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default CreatePost;
