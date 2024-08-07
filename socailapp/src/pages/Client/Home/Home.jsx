import React, { useEffect } from 'react'
import PostCard from '../../../components/Card/Card'
import Sidebar from '../../../components/Client/Sidebar/Sidebar.jsx'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function Home(){
  const {user,googleSignUploading,googleSignUpError,isNewUser,userAuthenticationSuccessful} = useSelector((state)=>state.auth)
  useEffect(() => {
     console.log(user,'useEffect')
     console.log(isNewUser,'useEffect')
     console.log(isNewUser,'useEffect')
     console.log(userAuthenticationSuccessful,'userAuthenticationSuccessful')
   
     },[user,isNewUser,userAuthenticationSuccessful]); 

     useEffect(()=>{
console.log('home page opened')
     })
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