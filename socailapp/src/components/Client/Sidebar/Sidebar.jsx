// Sidebar.jsx
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { useMediaQuery, Avatar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline } from '@mui/material';
import Appbar from '../Appbar/Appbar';
import sideItem from './Sidebar.js';
import colors from '../../../ThemeProvider/color.js';
import { useEffect } from 'react';

const drawerWidth = 220;

const openedMixin = (theme) => ({   
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    paddingLeft: "5px",
    width: '80px',
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    // flexDirection: "column",
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const isLessThan1024px = useMediaQuery('(max-width:1439px)');
  const isMoreThanOrEqualTo1024px = useMediaQuery('(min-width:1440px)');
  const isMobile = useMediaQuery('(max-width:767px)');
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isLessThan1024px) {
      setOpen(false);
    }
  }, [isLessThan1024px]);

  useEffect(() => {
    if (isMoreThanOrEqualTo1024px) {
      setOpen(true);
    }
  }, [isMoreThanOrEqualTo1024px]);

  return (

    <>
    <Box >
      <CssBaseline />
      <Appbar  />
      <Drawer  style={{
        position:"relative",
        top:"150px",
        right:"120px",
      }}  variant="permanent" open={open}>
        <DrawerHeader sx={{ px: 2, py: 2 }}>
          <Typography style={{ fontFamily: "Dancing Script", fontSize: "35px" }}>
            Social
          </Typography>
        </DrawerHeader>
        <List>
          {sideItem.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <ListItem key={index} disablePadding sx={{ display: 'block', py: 1, px: 1.5 }}>
                <ListItemButton
                  sx={{
                    minHeight: isMobile ? 10 : 20,
                    justifyContent: open ? 'initial' : 'center',
                    px: isMobile ? 3 : 1,
                    py: isMobile ? 1.5 : 0.5,
                    borderRadius: 2,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 10,
                      mr: open ? 1.5 : 'auto',
                      justifyContent: 'center',
                      fontSize: "25px",
                      color: colors.light.text,
                    }}
                  > 
                    <IconComponent />
                  </ListItemIcon>
                  {open && <ListItemText primary={item.name} />}
                </ListItemButton>
              </ListItem>
            );
          })}
          <ListItem sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 0,
                justifyContent: open ? 'initial' : 'center',
                px: 1,
                py: 0.5,
                borderRadius: 2
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 5,
                  mr: open ? 1.5 : 'auto',
                  justifyContent: 'center',
                  fontSize: "25px",
                  color: colors.light.text
                }}
              > 
                <Avatar alt="sj" src="/static/images/avatar/1.jpg" sx={{ width: 20, height: 20 }} />
              </ListItemIcon>
              {open && <ListItemText primary="Profile" />}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
  
    </Box>

    
    
    </>
  );

}
