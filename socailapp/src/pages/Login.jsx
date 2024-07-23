import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import React from "react";
import EmbeddedVideo from "../components/EmbeddedVideo/EmbeddedVideo";
import colors from "../ThemeProvider/color";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flexBasis: "30%" }}>
        <EmbeddedVideo />
      </Box>
      <Box sx={{ flex: 1, padding: "6%" }}>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
            }}
          >
            Sign in to Socail
          </Typography>

          <Box sx={{width:"40%"}}>
          <Box
            component="form"
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
                sx={{
                  backgroundColor: "",
                }}
              >
                <TextField
                  size="small"
                  sx={{
                    width: "100%",
                    marginTop: "3px",
                    display: "",
                    borderRadius: 100,
                  }}
                />
              </Box>
            </Box>
            <Box >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                Password
              </Typography>
              <Box
               
              >
                <TextField
                  size="small"
                  sx={{
                    width: "100%",
                    marginTop: "3px",
                  }}
                />
              </Box>
            </Box>
            <Box >
              <Button
                variant="contained"
                fullWidth
               
                sx={{
                  borderRadius: "25px",
                  textTransform: "unset",
                }}
              >
                Sign in
              </Button>
              </Box>
              </Box>

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
                Sign in with Google
              </Button>
            <Box sx={{textAlign:"center",color:colors.light.subtitle}}>
            <Typography variant="subtitle2">
                Don't have an account? <Link>Sign in</Link>
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
