import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './ThemeProvider/AppThemeProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientLayout from './Layouts/ClientLayout/ClientLayout.jsx';
import Home from './pages/Client/Home/Home';
import SignUp from './pages/Client/SignUp';
import Login from './pages/Client/Login';  
import { useContext, useEffect } from 'react';
import UserAuthenticationContext from './context/UserAuthenticationContext.jsx';
import { useSelector } from 'react-redux';

function App() {
  const {userAuthenticationSuccessful} = useSelector((state)=>state.auth)

  useEffect(()=>{

  console.log(userAuthenticationSuccessful,'app')


  })
  const authenticated = userAuthenticationSuccessful;  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Authenticated Routes */}
          {authenticated ? (
            <Route path="/" element={<ClientLayout />}>
              <Route index element={<Home />} />
            </Route>
          ) : (
            <>
              {/* Public Routes */}
              <Route path="/" element={<SignUp />} />
              <Route path="/signin" element={<Login />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
