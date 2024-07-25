import './App.css'
import {  AppBar, ThemeProvider, } from '@mui/material'
import { theme } from './ThemeProvider/AppThemeProvider'
import SignUp from './pages/Client/SignUp'
import Login from './pages/Client/Login'
import PrimarySearchAppBar from './pages/Client/Appbar/Appbar'
import MiniDrawer from './pages/Client/Sidebar/Sidebar'
function App() {

  return ( 
    <>
    <ThemeProvider theme={theme}>
         {/* <SignUp/> */}
         {/* <Login/> */}
<MiniDrawer/>
   {/* <PrimarySearchAppBar/> */}
    </ThemeProvider>

    </>
  )
}

export default App
