import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImgMediaCard from './Div'
import { Box, Container, ThemeProvider,createTheme } from '@mui/material'
function App() {
const darkTheme = createTheme({
  palette:{
    mode:'dark'
  }
})
  return (
    <>
    <ThemeProvider theme={darkTheme}>

<Box >

</ Box>
    </ThemeProvider>
    </>
  )
}

export default App
