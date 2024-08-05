import { Box, Button, Container, TextField, Typography,FormHelperText } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmbeddedVideo from "../../components/EmbeddedVideo/EmbeddedVideo";
import colors from "../../ThemeProvider/color";
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {signInWithUserCredentials} from '../../redux/authThunk'



function Login() {
  const [isMounted, setIsMounted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const  {user,error} = useSelector((state)=>state.auth)
  const onSubmit = (data) => {
    dispatch(signInWithUserCredentials(data))
    .unwrap()
      .then(() => {
        console.log(user,'userrrrrrrrrr');
      })
      .catch((err) => {
        console.log(error,'errorrooroo')
      });
      console.log('Sign-in failed:', error);
  };
  useEffect(() => {
    if (user) {
      console.log(user, 'User data updated in useEffect');
    }
  }, [user]); // Run effect when `user` changes

  useEffect(() => {  


    setIsMounted(true); 
  }, []);

  return (
    <Box sx={{ display: "flex" ,height:"100vh"}}>
      <Box sx={{ flexBasis:isMounted ? "30%" :  "40%",transition:"flex-basis 1s ease",height:'100vh',display:{xs:"none",sm:"none",md:'block'},overflow:'hidden' }}>
        <EmbeddedVideo />
      </Box>
      <Box sx={{display:{
        sm:'flex',
        md:'block'
      },justifyContent:"center",
       flex: 1, px: "6%",py:'4%',overflowY:'scroll', }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            Sign in to Socail
          </Typography>



          <Box sx={{width:{
            sx:"100%",
            sm:'100%',
            md:'60%',
            lg:'40%'
          }}}>

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
                  {...register("email",{
                    required:"Email is required",
                    pattern:{
                      value: /^[a-zA-Z0-9._-]+@gmail\.com$/,
                      message:"Invalid email address"
                    },
                    maxLength:{
                      value:"40",
                      message:"Max length exceeded"
                    }
                  })}
                />
                {
                  errors.email && (
                    <span style={{ color: "red",fontSize:"12px",display:"block",marginTop:"6px" }}>
                         { errors.email.message}
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
          />
          {errors.password && (
               <span style={{ color: "red",fontSize:"12px",display:"block",marginTop:"6px" }}>
               { errors.password.message}
          </span>
          )}
        </Box>
      
            <Box >
              <Button
                variant="contained"
                fullWidth
               
                sx={{
                  borderRadius: "25px",
                  textTransform: "unset",
                }}
                type="submit"
              >
                Sign in
              </Button>
              </Box>
              </Box>
              </form>

              <Box sx={{
                display:"flex",
                flexDirection:"column",
                gap:"20px",
                marginTop:"20px"
              }}>
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
                startIcon={<FcGoogle />}
              >
                Sign In with Google
              </Button>
            <Box sx={{textAlign:"center",color:colors.light.subtitle,marginBottom:"50px"}}>
            <Typography variant="subtitle2" >

            Already have an account? <Link to="/" style={{ cursor: "pointer",color:'black' }}>Sign Up</Link>
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
