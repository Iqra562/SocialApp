import React, { useContext, useEffect } from 'react'
import PostCard from '../../../components/Client/Card/Card.jsx'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import colors from '../../../ThemeProvider/color.js'
import ThemeSwitcherContext from '../../../context/ThemeSwitcherContext/ThemeSwitcherContext.jsx'
import useResponsive from '../../../utils/useResponsive.js'
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
     const {isSmallScreen,isMdScreen} = useResponsive();
return(
     <>
     
     <Box sx={{
         display:"flex",
         flexDirection:"column",
         justifyContent:"center",
         alignItems:"center",
         backgroundColor:colors[mode].background,
         paddingX: isSmallScreen ? '2%' :isMdScreen ? '15%' : '20%',
         paddingTop :'10px',
         paddingBottom:'40px'

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