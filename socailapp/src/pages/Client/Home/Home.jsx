import React from 'react'
import PostCard from '../../../components/Card/Card'
import Sidebar from '../../../components/Client/Sidebar/Sidebar.jsx'
import { Box, Typography } from '@mui/material'

function Home(){
return(
     <>
     
     <Box sx={{
         display:"flex",
         flexDirection:"column",
         justifyContent:"center",
         alignItems:"center"

     }}>
          <PostCard/>
          <PostCard/>
          <PostCard/>
     </Box>
      {/* <Sidebar/> */}

     </>

)
}
export default  Home