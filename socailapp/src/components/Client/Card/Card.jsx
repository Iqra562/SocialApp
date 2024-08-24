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



export default function PostCard() {
  const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const {mode} = useContext(ThemeSwitcherContext);
    const {comment :Comment,heartOutline:HeartOutline,bookmarkOutline:BookMark,} = icons
  const handleExpandClick = () => {
    setExpanded(!expanded); 
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //  Fetch all posts
        const postsSnapshot = await getDocs(collection(firestore, "UserPosts"));
  
        const postsData = await Promise.all(
          postsSnapshot.docs.map(async (postDoc) => {
            const post = postDoc.data();
            const userRef = doc(firestore, "Users", post.userId);
            const userSnapshot = await getDoc(userRef);
            
            if (userSnapshot.exists()) {
              const user = userSnapshot.data();
              
              return {
                ...post,
                userName: user.username, 
              };
            } else {
              return {
                ...post,
                userName: "Unknown User", 
              };
            }
          })
        );
  
        // Update state with fetched data
        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts or users:", error);
        setLoading(false);
      }
    };
  
    fetchPosts();
  }, []);
  console.log(posts,"post")
  return (
<>
    {
      posts.map((post,index)=>(
<Card sx={{  marginBottom: "30px", boxShadow: 0, backgroundColor: colors[mode].background,
  borderBottom:`1px solid ${colors[mode].border}` ,borderRadius:0}}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500],width:'30px',height:'30px' }} aria-label="recipe">
        {post.userName.split("")[0]}
      </Avatar>
    }
    sx={{ paddingX: 0, backgroundColor: colors[mode].background }}
    title={post.userName}
  />
  <CardMedia
    component="img"
    image={post.imageUrl
    }
    alt="Paella dish"
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
     {post.title}
    </Typography>
  </CardContent>
</Card>

      ))
    }
    </>

  );
}
