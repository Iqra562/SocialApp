import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import girl from '../../../assets/Images/girl.avif'
import ThemeSwitcherContext from '../../../context/ThemeSwitcherContext/ThemeSwitcherContext';
import colors from '../../../ThemeProvider/color';
import { useContext } from 'react';
import { Box } from '@mui/material';
import { icons } from '../../../utils/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { firestore } from '../../../config/firebaseConfig';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
 const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function PostCard({data}) {
  const {mode} = useContext(ThemeSwitcherContext);
    const {comment :Comment,heartOutline:HeartOutline,bookmarkOutline:BookMark,} = icons;

 
  const {userName,imageUrl,title}  = data

 
  return (
<>
 
<Card sx={{  marginBottom: "30px", boxShadow: 0, backgroundColor: colors[mode].background,
  borderBottom:`1px solid ${colors[mode].border}` ,borderRadius:0}}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500],width:'30px',height:'30px' }} aria-label="recipe">
        {userName.split("")[0]}
      </Avatar>
    }
    sx={{ paddingX: 0, backgroundColor: colors[mode].background }}
    title={userName}
  />
  <CardMedia
    component="img"
    image={imageUrl}  alt="user"
    sx={{
      border: `1px solid ${colors[mode].border}`,
      width: '100%', 
      borderRadius:'2px',
      boxSizing: 'border-box', 
    }}
  
  />
  <CardActions disableSpacing sx={{ paddingX: 0, backgroundColor: colors[mode].background, display: 'flex', justifyContent: 'space-between' }}>
    <Box>
      <IconButton aria-label="add to favorites" sx={{ color: colors[mode].icon }}>
        <HeartOutline />
      </IconButton>
      <IconButton aria-label="share" sx={{ color: colors[mode].icon }}>
        <Comment />
      </IconButton>
    </Box>
    <Box>
      <IconButton sx={{ color: colors[mode].icon }} aria-label="show more">
        <BookMark />
      </IconButton>
    </Box>
  </CardActions>
  <CardContent sx={{ padding: 0, backgroundColor: colors[mode].background }}>
    <Typography variant="body2" color="text.secondary">
     {title}
    </Typography>
  </CardContent>
</Card>

     
    </>

  );
}
