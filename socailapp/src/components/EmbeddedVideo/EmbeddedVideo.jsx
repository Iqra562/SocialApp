// src/components/EmbeddedVideo.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import main from '../../assets/Images/Video/MushroomVideo.mp4';

const EmbeddedVideo = () => {
  return (
 
   
   <Box
        component="video"
        width="40%"
        height="100vh"
        autoPlay
        loop
        muted
        sx={{
          width:"100%",
          objectFit: 'cover',
               }}
      >
        <source src={main} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
  );
};

export default EmbeddedVideo;
