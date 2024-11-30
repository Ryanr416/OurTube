import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";

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
    </nav>
  );
};

export default Navbar;
