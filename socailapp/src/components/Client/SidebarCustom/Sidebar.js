import React, { useContext } from "react";
import ThemeSwitcherContext from "../../../context/ThemeSwitcherContext/ThemeSwitcherContext";
import { icons } from "../../../utils/icons";

const { home, create, saved, darkmode, lightmode, logout } = icons;

const SideBarItems = () => {
  const { darkMode, setDarkMode } = useContext(ThemeSwitcherContext);

  const sideItem = [
    { icon: home, name: "Home" },
    { icon: create, name: "Create" },
    { icon: saved, name: "Save" },
    { 
      icon: darkMode ? lightmode :darkmode , 
      name: darkMode ? "Lightmode" : "Darkmode", 
      onClick: () => setDarkMode(!darkMode)
    },
    { icon: logout, name: "Logout" },
  ];

  return sideItem;
};

export default SideBarItems;
