import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import EmbeddedVideo from "../../components/EmbeddedVideo/EmbeddedVideo";
import colors from "../../ThemeProvider/color";
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser, signUpWithGoogle } from "../../redux/authThunk";
import {resetUsernameError,resetEmailError} from '../../redux/authSlice'
import { Navigate } from "react-router-dom";

function SignUp() {
  const [isMounted, setIsMounted] = useState(false);
  const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
  const password = watch('password');
  const dispatch = useDispatch();
  const {loading,emailError,userNameError,googleSignUploading} = useSelector((state)=>state.auth);
const navigate = useNavigate();
  

  const onSubmit = (data) => {
    dispatch(signUpUser(data))
      .unwrap()
      .then(() => {
        reset(); 
        
      })
      .catch((error) => {
        console.error('Error during sign up:', error);
      });
  };

  
  const handleGoogleSignUp =  () => {
    // Dispatch the thunk action 
   dispatch(signUpWithGoogle())
   .unwrap()
   .then(()=>{
navigate('/')
   })
  };
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const handleUserNameError = () => {
    if (userNameError) {
      dispatch(resetUsernameError());
    }
  };
  const handleEmailError = () => {
    if (emailError) {
      dispatch(resetEmailError());
    }
  };
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ flexBasis: isMounted ? "30%" : "40%", transition: "flex-basis 1s ease", height: '100vh', display: { xs: "none", sm: "none", md: 'block' }, overflow: 'hidden' }}>
        <EmbeddedVideo />
      </Box>
      <Box sx={{ display: { sm: 'flex', md: 'block' }, justifyContent: "center", flex: 1, px: "6%", py: '4%', overflowY: 'scroll' }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Sign up to Social
          </Typography>
          <Box sx={{ width: { sx: "100%", sm: '100%', md: '60%', lg: '40%' } }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "30px" }}>
                <Box sx={{ display: "flex", gap: { xs: '30px', sm: '10px' }, flexDirection: { xs: 'column', sm: "row" } }}>
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Name
                    </Typography>
                    <Box sx={{ borderRadius: "100px" }}>
                      <TextField
                        size="small"
                        sx={{ width: "100%", marginTop: "3px", borderRadius: 100 }}
                        {...register("name", {
                          required: "Name is required",
                          pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: "Name must contain only letters"
                          },
                          maxLength: {
                            value: 30,
                            message: "Max length exceeded"
                          }
                        })}
                      />
                      {errors.name && (
                        <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "6px" }}>
                          {errors.name.message}
                        </span>
                      )}
                    </Box>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Username
                    </Typography>
                    <Box sx={{ borderRadius: "100px" }}>
                      <TextField
                        size="small"
                        sx={{ width: "100%", marginTop: "3px", borderRadius: 100 }}
                        {...register("username", {
                          required: "Username is required",
                          pattern: {
                            value: /^[A-Za-z0-9_-]+$/,
                            message: "Username may only contain A-Z, 0-9, underscores, and dashes"
                          },
                          maxLength: {
                            value: 30,
                            message: "Max length exceeded"
                          }
                        })}
                      onChange={handleUserNameError}
                      />
                      {errors.username && (
                        <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "6px" }}>
                          {errors.username.message}
                        </span>
                      )}
                      {userNameError && (
                        <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "6px" }}>
                          {userNameError}
                        </span>
                      )}
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Email
                  </Typography>
             
                  <Box>
                    <TextField
                      size="small"
                      sx={{ width: "100%", marginTop: "3px", borderRadius: 100 }}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._-]+@gmail\.com$/,
                          message: "Invalid email address"
                        },
                        maxLength: {
                          value: 40,
                          message: "Max length exceeded"
                        }
                      })}
                      onChange={handleEmailError}
                    />
                    {errors.email && (
                      <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "6px" }}>
                        {errors.email.message}
                      </span>
                      
                    )}
                         {emailError && (
                  <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "6px" }}>
                      {emailError}
                      </span>
                  )}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Password
                  </Typography>
                  <TextField
                    size="small"
                    sx={{ width: "100%", marginTop: "3px", borderRadius: 100 }}
                    type="password"
                    {...register('password', {
                      required: 'Password is required',
                      pattern: {
                        value: /^.{8,}$/,
                        message: 'Password must be at least 8 characters long',
                      },
                    })}
                  />
                  {errors.password && (
                    <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "6px" }}>
                      {errors.password.message}
                    </span>
                  )}
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Confirm Password
                  </Typography>
                  <TextField
                    size="small"
                    sx={{ width: "100%", marginTop: "3px", borderRadius: 100 }}
                    type="password"
                    {...register('confirmPassword', {
                      required: 'Confirm Password is required',
                      validate: value => value === password || 'Passwords do not match',
                    })}
                  />
                  {errors.confirmPassword && (
                    <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "6px" }}>
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </Box>
                <Box>
             
          <Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ borderRadius: "25px", textTransform: "unset" }}
                    type="submit"
                    disabled={loading || googleSignUploading}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
                  </Button>
                 
                </Box>
                </Box>
              </Box>
            </form>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: "25px",
                  textTransform: "unset",
                  color: "black",
                  border: `1px solid ${colors.light.secondary}`,
                  "&:hover": {
                    backgroundColor: "transparent",
                    border: `1px solid ${colors.light.border}`,
                  },
                }}
                disabled={loading || googleSignUploading}
                onClick={handleGoogleSignUp}
                startIcon={!googleSignUploading && <FcGoogle />}
              >
                 {googleSignUploading ? <CircularProgress size={24} color="inherit" /> : ' Sign Up with Google'}
               
              </Button>
             
              <Box sx={{ textAlign: "center", color: colors.light.subtitle, marginBottom: "50px" }}>
                <Typography variant="subtitle2">
                  Already have an account? <Link to="/" style={{ cursor: "pointer", color: 'black' }}>Sign In</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
