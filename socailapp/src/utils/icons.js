// src/utils/icons.js
import { GoHome } from 'react-icons/go';
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { VscDiffAdded } from "react-icons/vsc";
import { FiSun } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { MdUpload } from "react-icons/md";

export const icons = {
  home: GoHome,
  create:VscDiffAdded ,
  saved:IoCreateOutline,
  darkmode:MdOutlineDarkMode,
  comment : FaRegComment,
  heartOutline :FaRegHeart ,
  bookmarkOutline:FaRegBookmark,
  lightmode:FiSun,
  logout:IoLogOutOutline,
  uploadImage :MdUpload

};
  