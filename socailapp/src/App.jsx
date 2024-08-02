import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './ThemeProvider/AppThemeProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientLayout from './Layouts/ClientLayout/ClientLayout.jsx';
import Home from './pages/Client/Home/Home';
import SignUp from './pages/Client/SignUp';
import Login from './pages/Client/Login';  // Import your SignIn component

function App() {
  const authenticated = false;  // Example: Change this based on your authentication logic

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
