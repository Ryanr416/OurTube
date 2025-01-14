import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import UploadIcon from "@mui/icons-material/Upload";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <MenuIcon
          className="menu-icon"
          onClick={() => {
            console.log("Menu clicked!");
            setSidebar((prev) => !prev);
          }}
        />

        <YouTubeIcon className="logo" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
      </div>

      <div className="nav-right flex-div">
        <UploadIcon />
        <ExpandMoreIcon />
        <NotificationsNoneOutlinedIcon />
        <AccountCircleOutlinedIcon className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
