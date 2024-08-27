import React, { useContext, useEffect, useState } from 'react';
import PostCard from '../../../components/Client/Card/Card.jsx';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import colors from '../../../ThemeProvider/color.js';
import ThemeSwitcherContext from '../../../context/ThemeSwitcherContext/ThemeSwitcherContext.jsx';
import useResponsive from '../../../utils/useResponsive.js';
import { getAllPosts } from '../../../redux/postThunk';
import CardSkeleton from '../../../components/CardSkeleton/CardSkeleton.jsx'
function Home() {
  const { mode } = useContext(ThemeSwitcherContext);
  const { isSmallScreen, isMdScreen } = useResponsive();
  const dispatch = useDispatch();
  
  const {posts,loading} = useSelector((state) => state.allPosts);
  const [post, setPosts] = useState([]);

  useEffect(() => {
    dispatch(getAllPosts());  
  }, [dispatch]);

  useEffect(() => {
    setPosts(posts);  
  }, [posts]);

  return (
    <Box sx={{ backgroundColor: colors[mode].background, height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors[mode].background,
          paddingX: isSmallScreen ? '2%' : isMdScreen ? '15%' : '30%',
          paddingTop: '10px',
          paddingBottom: '40px',
        }}
      >
        {
          loading ? (

            [...Array(3)].map((_, index) => (
              <CardSkeleton key={index} />
            ))
          ) :(
            post.map((eachPost, index) => (
              <PostCard key={index} data={eachPost} />  
            ))
          )
        }
       
      </Box>
    </Box>
  );
}

export default Home;
