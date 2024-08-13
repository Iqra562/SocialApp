import React, { useContext, useEffect } from 'react'
import PostCard from '../../../components/Client/Card/Card.jsx'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import colors from '../../../ThemeProvider/color.js'
import ThemeSwitcherContext from '../../../context/ThemeSwitcherContext/ThemeSwitcherContext.jsx'
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
     const {mode} = useContext(ThemeSwitcherContext)
return(
     <>
     
     <Box sx={{
         display:"flex",
         flexDirection:"column",
         justifyContent:"center",
         alignItems:"center",
         backgroundColor:colors[mode].background
     }}>
     <Box sx={{
     
         marginTop:'100px',
       
     }}>
          <PostCard/>
          <PostCard/>
          <PostCard/>
     </Box>
     </Box>
      {/* <Sidebar/> */}

     </>

)
}
export default  Home