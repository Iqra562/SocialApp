import { styled, ListItem , Avatar, Box, ListItemButton, ListItemText, Typography, useMediaQuery } from '@mui/material';
import colors from '../../../ThemeProvider/color';



export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 20,
    height: 20,
    border: `1px solid ${colors[theme.palette.mode].background}`,
    borderRadius: '100%',
    color:colors[theme.palette.mode].icon,
    backgroundColor:colors[theme.palette.mode].background,
    boxShadow: `0 0 0 1px ${colors[theme.palette.mode].text}`,
  }));

export const SideBox = styled(Box)(({ theme }) => ({
  width: '100%', 
  height: '100vh', 
  backgroundColor: colors[theme.palette.mode].background,
  borderRight: `1px solid ${colors[theme.palette.mode].border}`,
  flexDirection: 'column', 
  position: 'static',
  
  
  // Media queries using theme breakpoints
  [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
      flexDirection: 'row',
      position: 'fixed',
      bottom: 0,
      zIndex: 2000,
      borderRight: 'none',
      borderTop: `1px solid ${colors[theme.palette.mode].border}`,
  },
  [theme.breakpoints.between('sm','md')]: {
    width: '4rem',
  },
  [theme.breakpoints.up('md')]: {
    width: '15rem',
  },
}));

 export  const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    minHeight: 20,
    justifyContent: 'initial',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(0.8),
    paddingBottom: theme.spacing(0.8),
    borderRadius: theme.shape.borderRadius * 2,
  }));

 export  const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    marginLeft: '-24px',
    color: colors[theme.palette.mode].text,
  }));


  export const StyledListItem = styled(ListItem)(({ theme }) => ({
    display: 'block',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    width: '100%',
    flexDirection: 'column',
  
    // Responsive styles using theme breakpoints
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
      width: 'auto',
      flexDirection: 'row',
    },
  }));
  