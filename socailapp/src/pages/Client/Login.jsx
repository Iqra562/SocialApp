import { Box, Button, Container, TextField, Typography, FormHelperText, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmbeddedVideo from "../../components/EmbeddedVideo/EmbeddedVideo";
import colors from "../../ThemeProvider/color";
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInWithUserCredentials ,signInWithGoogle} from '../../redux/authThunk'
import { resetSignInError } from "../../redux/authSlice"; 
import  {useNavigate} from 'react-router-dom'

function Login() {
  const [isMounted, setIsMounted] = useState(false);
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, signInError, userAuthenticationSuccessful,signInLoading,signInWithGoogleLoading,signInWithGoogleError} = useSelector((state) => state.auth);
  const onSubmit = (data) => {
    dispatch(signInWithUserCredentials(data))
      .unwrap()
      .then(() => {
        reset();
        navigate('/');
      })
      .catch((err) => {
        console.log(err, 'errorr')
      });
  };
 
const handleGoogleSignIn = ()=>{
  dispatch(signInWithGoogle())
  .unwrap()
  .then(()=>{
    navigate('/')
  })
}

const handleSignInError = ()=>{
  if (signInError) {
    dispatch(resetSignInError());
  }
}

  useEffect(() => {


    setIsMounted(true);
  }, []);
console.log(signInWithGoogleError)
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ flexBasis: isMounted ? "30%" : "40%", transition: "flex-basis 1s ease", height: '100vh', display: { xs: "none", sm: "none", md: 'block' }, overflow: 'hidden' }}>
        <EmbeddedVideo />
      </Box>
      <Box sx={{
        display: {
          sm: 'flex',
          md: 'block'
        }, justifyContent: "center",
        flex: 1, px: "6%", py: '4%', overflowY: 'scroll',
      }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            Sign in to Socail
          </Typography>
{(signInError || signInWithGoogleError) && (
  <Typography variant="h6" style={{ color: "red", display: "block", marginTop: "6px" }}>
    Invalid credentials or user not exist
  </Typography>
)}

          <Box sx={{
            width: {
              sx: "100%",
              sm: '100%',
              md: '60%',
              lg: '40%'
            }
          }}>

            <form onSubmit={handleSubmit(onSubmit)}>

              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >

                <Box >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "bold",
                      display: "block",
                    }}
                  >
                    Email
                  </Typography>
                  <Box

                  >
                    <TextField
                      size="small"
                      sx={{
                        width: "100%",
                        marginTop: "3px",
                        borderRadius: 100,
                      }}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._-]+@gmail\.com$/,
                          message: "Invalid email address"
                        },
                        maxLength: {
                          value: "40",
                          message: "Max length exceeded"
                        }
                      })}
                      onChange={handleSignInError}
                    />
                    {
                      errors.email && (
                        <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "6px" }}>
                          {errors.email.message}
                        </span>
                      )
                    }
                  </Box>
                </Box>


                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "bold",
                      display: "block",
                    }}
                  >
                    Password
                  </Typography>
                  <TextField
                    size="small"
                    sx={{
                      width: "100%",
                      marginTop: "3px",
                      borderRadius: 100,
                    }}

                    type="password"
                    {...register('password', {
                      required: 'Password is required',

                    })}
                    onChange={handleSignInError}
                  />
                  {errors.password && (
                    <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "6px" }}>
                      {errors.password.message}
                    </span>
                  )}
                </Box>

                <Box >
            
<Button
                    variant="contained"
                    fullWidth
                    sx={{ borderRadius: "25px", textTransform: "unset" }}
                    type="submit"
                    disabled={signInLoading  || signInWithGoogleLoading}
                  >
                    {signInLoading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
                  </Button>

                </Box>
              </Box>
            </form>

            <Box sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "20px"
            }}>
              {/* <Button
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
                startIcon={!signInWithGoogleLoading &&  <FcGoogle />}
                disabled={signInLoading  || signInWithGoogleLoading}
                onClick={handleGoogleSignIn}
              >
                 {signInWithGoogleLoading ? <CircularProgress size={24} color="inherit" /> : 'Sign In with Google'}
            
              </Button> */}
              <Box sx={{ textAlign: "center", color: colors.light.subtitle, marginBottom: "50px" }}>

                <Typography variant="subtitle2" >

                  Already have an account? <Link to="/signup" style={{ cursor: "pointer", color: 'black' }}>Sign Up</Link>
                </Typography>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
export default Login;
