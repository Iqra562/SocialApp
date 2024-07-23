import './App.css'
import {  ThemeProvider, } from '@mui/material'
import { theme } from './ThemeProvider/AppThemeProvider'
import SignUp from './pages/SignUp'
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
         <SignUp/>
    </ThemeProvider>
    </>
  )
}

export default App
