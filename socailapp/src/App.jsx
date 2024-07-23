import './App.css'
import {  ThemeProvider, } from '@mui/material'
import { theme } from './ThemeProvider/AppThemeProvider'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
         {/* <SignUp/> */}
         <Login/>
    </ThemeProvider>
    </>
  )
}

export default App
