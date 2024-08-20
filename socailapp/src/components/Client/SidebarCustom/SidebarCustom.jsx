import * as React from 'react';
import { styled, Avatar, Box,List,ListItemIcon, ListItemButton, ListItemText, ListItem, Typography,useMediaQuery } from '@mui/material';
import colors from '../../../ThemeProvider/color';
import SideBarItems from './Sidebar';
import { useContext } from 'react';
import ThemeSwitcherContext from '../../../context/ThemeSwitcherContext/ThemeSwitcherContext';
import { Link } from 'react-router-dom';
import { StyledAvatar, SideBox, StyledListItemButton, StyledListItemText, StyledListItem } from './StyledComponent';
import useResponsive from '../../../utils/useResponsive';
import { useSelector } from 'react-redux';


function SidebarCustom() {
  const sideItems = SideBarItems();
  const { mode } = useContext(ThemeSwitcherContext);
  const { isMdScreen, isSmallScreen } = useResponsive();
  const {user} = useSelector((state)=>state.auth)
  console.log(user)
  return (
    <>
      <SideBox >
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
                <StyledAvatar alt={user.name} src="/path/to/profile-image.jpg" />
              </ListItemIcon>
              {!isMdScreen && (
                <StyledListItemText primary={user.name} />
              )}
            </StyledListItemButton>
          </StyledListItem>
        </List>
      </SideBox>
    </>
  );
}

export default SidebarCustom;
