import React, { useState, useContext } from "react";
import { Box, styled, TextField, Typography, Button } from "@mui/material";
import colors from "../../../ThemeProvider/color";
import ThemeSwitcherContext from "../../../context/ThemeSwitcherContext/ThemeSwitcherContext";

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

function CreatePost() {
  const { mode } = useContext(ThemeSwitcherContext);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", backgroundColor: colors[mode].background, paddingY: "50px" }}>
      <Box sx={{ width: "100%", paddingX: "25%" }}>
        <Typography variant="h6" sx={{ color: colors[mode].text }}>
          Create Post
        </Typography>
        <Box sx={{ width: "100%", marginTop: '20px' }}>
          <form>
            <Box>
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ color: "#838080" }}>
                  Title
                </Typography> 
                <CustomTextField size="small" />
              </Box>
              <Box sx={{ width: "100%", marginTop: '20px' }}>
                <Typography sx={{ color: "#838080" }}>
                  Image
                </Typography> 
                <Button variant="contained" component="label">
                  Upload Image
                  <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                </Button>
                {selectedImage && (
                  <Box sx={{ marginTop: '20px' }}>
                    <img src={selectedImage} alt="Selected" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
                  </Box>
                )}
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default CreatePost;
