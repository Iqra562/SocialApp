import { createTheme } from "@mui/material";
import colors from "./color";
import { deepPurple, green, purple, red } from "@mui/material/colors";
export const theme  = createTheme({
    palette:{
      mode:'light'  ,
      primary:{
        main:colors.light.primary,
        dark:colors.light.hover,
        // light:"yellow",
        contrastText:"white"
      },
      secondary:{
        main:red[200]
      }
    },
    components: {
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