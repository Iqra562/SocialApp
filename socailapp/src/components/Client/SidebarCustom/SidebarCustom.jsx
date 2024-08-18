import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, styled, Typography, useMediaQuery } from '@mui/material';
import colors from '../../../ThemeProvider/color';
import SideBarItems from './Sidebar';
import { useContext } from 'react';
import ThemeSwitcherContext from '../../../context/ThemeSwitcherContext/ThemeSwitcherContext';
import { Link } from 'react-router-dom';

function SidebarCustom() {
  const sideItems = SideBarItems();
  const { mode } = useContext(ThemeSwitcherContext);
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 20,
    height: 20,
    border: `1px solid ${colors[theme.palette.mode].background}`,
    borderRadius: '100%',
    boxShadow: `0 0 0 1px ${colors[theme.palette.mode].text}`,
  }));

  const SideBox = styled(Box)(({ theme }) => ({
    width: isSmallScreen ? '100%' : (isMdScreen ? '4rem' : '15rem'),
    height: isSmallScreen ? 'auto' : '100vh',
    backgroundColor: colors[theme.palette.mode].background,
    borderRight: isSmallScreen ? 'none' : `1px solid ${colors[theme.palette.mode].border}`,
    // display: 'flex',
    flexDirection: isSmallScreen ? 'row' : 'column',
    // alignItems: isSmallScreen ? 'center' : 'flex-start',
    position:isSmallScreen ? 'fixed' :'static',
    bottom: 0,
    zIndex: 2000,
    // overflow: isSmallScreen ? 'hidden' : 'hidden'
  }));


  const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    minHeight: 20,
    justifyContent: 'initial',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(0.8),
    paddingBottom: theme.spacing(0.8),
    borderRadius: theme.shape.borderRadius * 2,
  }));

  const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    marginLeft: '-24px',
    color: colors[theme.palette.mode].text,
  }));

  const StyledListItem = styled(ListItem)(({ theme }) => ({
    display: 'block',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft:isSmallScreen ? 0 : theme.spacing(1.5),
    paddingRight:isSmallScreen ? 0 : theme.spacing(1.5),
    width: isSmallScreen ? 'auto' :'100%',
    flexDirection: isSmallScreen ? 'row' : 'column',
  }));

  return (
    <>
      <SideBox>
      {!isSmallScreen &&   <Box sx={{ py: 2 }}>
     {   !isMdScreen ? (

       
       <Typography variant="h6" sx={{ px: 2.5, mt: 2, mb: 1, color: colors[mode].text }}>
           Socail App 
          </Typography>
          ):(

            <Typography variant="h6" sx={{ px: 2.5, mt: 2, mb: 1, color: colors[mode].text }}>
            APP
          </Typography>
          )
          }
        </Box>}
        <List sx={{ px: 0, display: 'flex',justifyContent:'space-around', flexDirection: isSmallScreen ? 'row' : 'column' }}>
          {sideItems.map((item, index) => {
            const IconComponent = item.icon;
            const Content = (
              <StyledListItemButton onClick={item.onClick}>
                <ListItemIcon sx={{minWidth:isSmallScreen ? 0 : '56px'}}>
                  <IconComponent size="24" color={colors[mode].icon} />
                </ListItemIcon>
                {!isMdScreen && (
                  <StyledListItemText primary={item.name} />
                )}
              </StyledListItemButton>
            );

            return (
              <StyledListItem key={index} disablePadding>
                {item.Link ? (
                  <Link to={item.Link} style={{ textDecoration: 'none' }}>
                    {Content}
                  </Link>
                ) : (
                  Content
                )}
              </StyledListItem>
            );
          })}

          <StyledListItem disablePadding>
            <StyledListItemButton>
            <ListItemIcon sx={{minWidth:isSmallScreen ? 0 : '56px'}}>
                <StyledAvatar alt="User Name" src="/path/to/profile-image.jpg" />
              </ListItemIcon>
              {!isMdScreen && (
                <StyledListItemText primary="Inbox" />
              )}
            </StyledListItemButton>
          </StyledListItem>
        </List>
      </SideBox>
    </>
  );
}

export default SidebarCustom;
