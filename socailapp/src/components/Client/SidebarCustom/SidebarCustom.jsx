import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Avatar, Typography } from '@mui/material';
import colors from '../../../ThemeProvider/color'
import SideBarItems from './Sidebar';
import { useContext } from 'react';
import ThemeSwitcherContext from '../../../context/ThemeSwitcherContext/ThemeSwitcherContext';
function SidebarCustom(){
  const sideItems = SideBarItems();
  const {mode} = useContext(ThemeSwitcherContext)
    return (
      <>
        <Box  sx={{width:'15rem',height:'100vh', backgroundColor:colors[mode].background,   borderRight: `1px solid ${colors[mode].border}` }}>
           <Box sx={{py:2}}>

      <Typography variant="h6" sx={{ px: 2.5,mt:2,mb:1,color:colors[mode].text }}>
        Sidebar Heading
      </Typography>
           </Box>
            <List sx={{px:0}}>
              {sideItems.map((item,index)=>{
              const IconComponent  = item.icon;
              return(

              
              <ListItem key={index} disablePadding sx={{ display: 'block', py: 0.5, px: 1.5 }}>
              <ListItemButton  sx={{
                  minHeight:  20,
                  justifyContent: 'initial' ,
                  px:  1,
                  py:  0.8,
                  borderRadius: 2,
                  
                }}
                onClick={item.onClick}
                >
                <ListItemIcon>  
                  <IconComponent size='24' color={colors[mode].icon}/>  
                </ListItemIcon>
                <ListItemText 
  primary={item.name} 
  sx={{ 
    marginLeft: "-24px", 
    fontWeight: 'bold', 
    color: colors[mode].text 
  }} 
/>

              </ListItemButton> 
            </ListItem>
              )
              })}
            
              <ListItem disablePadding sx={{ display: 'block', py: 0.5, px: 1.5 }}>
                <ListItemButton  sx={{
                    minHeight:  20,
                    justifyContent: 'initial' ,
                    px:  1,
                    py:  0.8,
                    borderRadius: 2,
                    
                  }}>
                       <ListItemIcon sx={{}}>

                 <Avatar 
      alt="User Name" 
      src="/path/to/profile-image.jpg" 
      sx={{ width: 20, height: 20 ,border:'1px solid white',borderRadius:'100%', boxShadow: `0 0 0 1px ${colors.light.text}`  }} 
      />
      </ListItemIcon>
    <ListItemText primary="Inbox" sx={{ marginLeft: "-24px", color: colors[mode].text }} />
                </ListItemButton> 
              </ListItem>
            
            
        
          
            </List>
          
         
        </Box>
      

      </>

      );
}

export default SidebarCustom;