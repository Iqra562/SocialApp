import React, { useContext } from "react";
import ThemeSwitcherContext from "../../../context/ThemeSwitcherContext/ThemeSwitcherContext";
import { icons } from "../../../utils/icons";
import { useDispatch,useSelector } from "react-redux";
import { logOutUserCredentials } from "../../../redux/authThunk";
const { home, create, saved, darkmode, lightmode, logout } = icons;

const SideBarItems = () => {
  const { darkMode, setDarkMode } = useContext(ThemeSwitcherContext);
  const dispatch = useDispatch();

  const sideItem = [
    { icon: home, name: "Home" ,Link:'/'},
    { icon: create, name: "Create",Link:'/createpost' },
    { icon: saved, name: "Save" },
    { 
      icon: darkMode ? lightmode :darkmode , 
      name: darkMode ? "Lightmode" : "Darkmode", 
      onClick: () => setDarkMode(!darkMode)
    },
    { icon: logout, name: "Logout",onClick:()=>{dispatch(logOutUserCredentials())} },
  ];

  return sideItem;
};

export default SideBarItems;
