import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import EmbeddedVideo from "../components/EmbeddedVideo/EmbeddedVideo";
import colors from "../ThemeProvider/color";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
    return (
        <Box sx={{ display: "flex" }}>
            <Box sx={{ flexBasis: "30%" }} >
                <EmbeddedVideo />
            </Box>
            <Box sx={{ flex: 1, padding: "6%" }}>

                <Box >

                    <Typography variant="h6" sx={{
                        fontWeight: "bold"
                    }}>
                        Sign up to Socail
                    </Typography>
                    <Box component="form" sx={{
                         width:"40%",
                         marginTop:"20px",
                         display:"flex",
                         flexDirection:"column",
                         gap:"30px"
                         

}}>

                        <Box sx={{
                            display: 'flex',
                            gap:"10px",
                        }}
                        >

                            <Box>


                                <Typography variant="body2"  sx={{ fontWeight: 'bold' }}>
                                    Name
                                </Typography>
                                <Box sx={{
                                borderRadius:"100px"
                                }}>

                                <TextField
                                    size="small"
                                    sx={{ width: '100%',marginTop:"3px",borderRadius:100}}
                                    />
                                    </Box>
                            </Box>
                            <Box sx={{padding:0}}>


                                <Typography variant="body2"  sx={{ fontWeight: 'bold' }}>
                                Username
                                </Typography>
                                <Box sx={{
                                borderRadius:"100px"
                                }}>

                                <TextField
                                    size="small"
                                    sx={{ width: '100%',marginTop:"3px",borderRadius:100}}
                                    />
                                    </Box>
                            </Box>
                        
                        </Box>
                        <Box sx={{backgroundColor:""}}>


<Typography variant="body2"  sx={{ fontWeight: 'bold',display:"block",backgroundColor:"" }}>
Email
</Typography>
<Box sx={{
// borderRadius:"100px",
// display:"inline-block",
backgroundColor:""
}}>

<TextField
    size="small"
    sx={{ width: '100%',marginTop:"3px",display:"",borderRadius:100}}
    />
    </Box>
</Box>
                        <Box sx={{backgroundColor:""}}>


<Typography variant="body2"  sx={{ fontWeight: 'bold',display:"block",backgroundColor:"" }}>
Password
</Typography>
<Box sx={{
backgroundColor:""
}}>

<TextField
    size="small"
    sx={{ width: '100%',marginTop:"3px",display:"",borderRadius:100}}
    />
    </Box>
</Box>
<Box sx={{display:"flex",flexDirection:"column",gap:"20px"}}>
                    <Button variant="contained"  fullWidth disableRipple disableFocusRipple disableTouchRipple disableElevation sx={{
                        borderRadius:"25px",
                        textTransform:"unset"
                    }}>
Sign up
                    </Button>
                    <Button variant="outlined" fullWidth  disableFocusRipple  disableElevation sx={{
                        borderRadius:"25px",
                        textTransform:"unset",
                        color:"black",
                        border:`1px solid ${colors.light.secondary}`,
                        '&:hover':{
                            backgroundColor:"transparent",
                            border:`1px solid ${colors.light.border}`,
                        }
                    }} startIcon={<FcGoogle/>}>
Sign in with Google
                    </Button>
                </Box>
                    </Box>

                </Box>
            
            </Box>

        </Box>
    )
}
export default SignUp