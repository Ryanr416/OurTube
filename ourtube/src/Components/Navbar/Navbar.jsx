import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import UploadIcon from "@mui/icons-material/Upload";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" src={MenuIcon} alt="" />
        <img className="logo" src={YouTubeIcon} alt="" />
      </div>

      <div className="nav-middle flex-div">
        <input type="text" placeholder="Search" />
        <img src={SearchIcon} alt="" />
      </div>

      <div className="nav-right flex-div">
        <img src={UploadIcon} alt="" />
        <img src={ExpandMoreIcon} alt="" />
        <img src={NotificationsNoneOutlinedIcon} alt="" />
        <img src={AccountCircleOutlinedIcon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
