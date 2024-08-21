import './App.css';
import { ThemeProvider } from '@mui/material';
import { getTheme } from './ThemeProvider/AppThemeProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientLayout from './Layouts/ClientLayout/ClientLayout.jsx';
import Home from './pages/Client/Home/Home';
import SignUp from './pages/Client/SignUp';
import Login from './pages/Client/Login';  
import {  useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SidebarCustom from './components/Client/SidebarCustom/SidebarCustom.jsx';
import ThemeSwitcherContextProvider from './context/ThemeSwitcherContext/ThemeSwitcherContextProvider.jsx';
import ThemeSwitcherContext from './context/ThemeSwitcherContext/ThemeSwitcherContext.jsx';
import CreatePost from './pages/Client/CreatePost/CreatePost.jsx';

function App() {
  const {userAuthenticationSuccessful} = useSelector((state)=>state.auth)

  // useEffect(()=>{

  // console.log(userAuthenticationSuccessful,'app')


  // })
  const authenticated = userAuthenticationSuccessful;  
  const { mode } = useContext(ThemeSwitcherContext);
  return (
    <ThemeProvider theme={getTheme(mode)}>
      

      <BrowserRouter>
      <Routes>
          {/* Authenticated Routes */}
          {authenticated ? (
            <Route path="/" element={<ClientLayout />}>
              <Route index element={<Home />} />
              <Route  path='/createPost' element={<CreatePost />} />
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Route>
          ) : (
            <>
              {/* Public Routes */}
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
     

    </ThemeProvider>
  );
}

export default App;
