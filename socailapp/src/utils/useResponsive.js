// useResponsive.js
import { useMediaQuery } from '@mui/material';

const useResponsive = () => {
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return { isMdScreen, isSmallScreen };
};

export default useResponsive;
