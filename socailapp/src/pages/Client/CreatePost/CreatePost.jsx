import React, { useState, useContext } from "react";
import { Box, styled, TextField, Typography, Button } from "@mui/material";
import colors from "../../../ThemeProvider/color";
import ThemeSwitcherContext from "../../../context/ThemeSwitcherContext/ThemeSwitcherContext";
import { icons } from "../../../utils/icons";
import { useForm } from "react-hook-form";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; 
import { useSelector } from 'react-redux';
import {storage} from "../../../config/firebaseConfig";
import {db} from "../../../config/firebaseConfig"; 

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border:` 2px solid ${colors[theme.palette.mode].border}`, 
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
  color:"white",
  '&:hover': {
    backgroundColor: colors[theme.palette.mode].formbtn, 
  }
}));

function CreatePost() {
  const { mode } = useContext(ThemeSwitcherContext);
  const { uploadImage: UploadImage } = icons;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
    console.log(selectedImage,'slected');
    // Handle form submission
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  
  return (
    <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", backgroundColor: colors[mode].background, paddingY: "50px" }}>
      <Box sx={{ width: "100%", paddingX: "25%" }}>
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
             {!selectedImage &&   <Box
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
                      accept="image/*"
                      {...register("file", { required: 'File is required' })}
                      onChange={handleFileChange}
                    />
                  </UploadButton>
                  {errors.file && (
                    <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "6px" }}>
                      {errors.file.message}
                    </span>
                  )}
                </Box>}
                {selectedImage && (
              <Box sx={{ marginTop: '20px', borderRadius: "5px", overflow: "hidden" }}>
              <img src={selectedImage} alt="Selected" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
            </Box>
                )}
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", marginTop: "20px" }}>
              <PostButton variant="contained" type="submit">
                Post
              </PostButton>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}


export default CreatePost;
