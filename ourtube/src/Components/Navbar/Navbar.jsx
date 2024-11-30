import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src={MenuIcon} alt="" />
        <img src={YouTubeIcon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
