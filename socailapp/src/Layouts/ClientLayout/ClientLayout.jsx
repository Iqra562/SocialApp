import React from 'react';
import Sidebar from '../../components/Client/Sidebar/Sidebar.jsx';
import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import SidebarCustom from '../../components/Client/SidebarCustom/SidebarCustom.jsx';
import PrimarySearchAppBar from '../../components/Client/Navbar/Navbar.jsx';

const ClientLayout = () => {
  return (
    <>
              <Box sx={{display:"flex"}}>

      <SidebarCustom />
      <Box sx={{height:'100vh',width:"100%",overflowY:'scroll'}}>
{/* <Box sx={{width:'100%',backgroundColor:'',position:'fixed'}}> */}

<PrimarySearchAppBar />
{/* </Box> */}
    <Outlet />
      </Box>
              </Box>


    </>
  );
};

export default ClientLayout;
