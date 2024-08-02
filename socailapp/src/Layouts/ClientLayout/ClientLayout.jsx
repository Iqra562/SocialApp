import React from 'react';
import Sidebar from '../../components/Client/Sidebar/Sidebar.jsx';
import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const ClientLayout = () => {
  return (
    <>

      <Sidebar />

      <Box sx={{backgroundColor:'',height:"",
  width:'calc(100vw-14vw)',marginTop:"6%",marginLeft:"16%"}}>
    <Outlet />
      </Box>


    </>
  );
};

export default ClientLayout;
