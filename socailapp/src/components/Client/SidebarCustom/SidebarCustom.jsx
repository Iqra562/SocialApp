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
import sideItem from '../Sidebar/Sidebar';
function SidebarCustom(){
    return (
        <Box  sx={{maxWidth:220,height:'100vh'  ,  borderRight: `1px solid ${colors.light.border}` }}>
           <Box sx={{py:2}}>

      <Typography variant="h6" sx={{ px: 2.5,mt:2,mb:1 }}>
        Sidebar Heading
      </Typography>
           </Box>
            <List sx={{backgroundColor:"",px:0}}>
              {sideItem.map((item,index)=>{
              const IconComponent  = item.icon;
              return(

              
              <ListItem key={index} disablePadding sx={{ display: 'block', py: 0.5, px: 1.5 }}>
              <ListItemButton  sx={{
                  minHeight:  20,
                  justifyContent: 'initial' ,
                  px:  1,
                  py:  0.8,
                  borderRadius: 2,
                  
                }}>
                <ListItemIcon>  
                  <IconComponent size='24' color={colors.light.icon}/>  
                </ListItemIcon>
                <ListItemText 
  primary={item.name} 
  sx={{ 
    marginLeft: "-24px", 
    fontWeight: 'bold', 
    color: colors.light.text 
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
    <ListItemText primary="Inbox" sx={{ marginLeft: "-24px" }} />
                </ListItemButton> 
              </ListItem>
            
            
        
          
            </List>
         
        </Box>
      );
}

export default SidebarCustom;