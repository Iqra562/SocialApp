import { createTheme } from "@mui/material";
import colors from "./color";
import { deepPurple, green, purple, red } from "@mui/material/colors";
export const getTheme  =(mode)=>{
return createTheme({
    palette:{
      mode:mode  ,
      primary:{
        main:colors.light.primary,
        dark:colors.light.hover,
        // light:"yellow",
        contrastText:"white"
      },
      secondary:{
        main:colors.light.background
      }
    },
    components: {
      MuiAppBar:{
        styleOverrides:{
          root:{
            backgroundColor:"#fff",
            color:"#000",
            boxShadow:"none",
            borderBottom:`1px solid ${colors.light.background}`
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: colors.light.lightPurple,
              },
              '&.Mui-focused fieldset': {
                borderColor: colors.light.lightPurple,
                borderWidth: '2px',
              },
              borderRadius: '10px',
              '& fieldset': {
                borderColor:'#e7e7e9',
                // borderRadius: '100px',
              },
            },
          },
        },
      },
      MuiButton:{
defaultProps:{
  disableRipple:true,
disableFocusRipple:true,
  disableTouchRipple:true,
  disableElevation:true

}
      }
    },

})
}