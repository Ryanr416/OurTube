import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home"; /* Home */
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"; /* Video Games */
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"; /* Autos */
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball"; /* Sports */
import TvIcon from "@mui/icons-material/Tv"; /* entertainment */
import ComputerIcon from "@mui/icons-material/Computer"; /* Tech */
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic"; /* music */
import BookIcon from "@mui/icons-material/Book"; /* blog */
import NewspaperIcon from "@mui/icons-material/Newspaper"; /* news */

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="shortcut-links">
        <div className="side-link">
          <img src={HomeIcon} alt="" /> <p>Home</p>
        </div>
        <div className="side-link">
          <img src={HomeIcon} alt="" /> <p>Home</p>
        </div>
        <div className="side-link">
          <img src={HomeIcon} alt="" /> <p>Home</p>
        </div>
        <div className="side-link">
          <img src={HomeIcon} alt="" /> <p>Home</p>
        </div>
        <div className="side-link">
          <img src={HomeIcon} alt="" /> <p>Home</p>
        </div>
        <div className="side-link">
          <img src={HomeIcon} alt="" /> <p>Home</p>
        </div>
        <div className="side-link">
          <img src={HomeIcon} alt="" /> <p>Home</p>
        </div>
        <div className="side-link">
          <img src={HomeIcon} alt="" /> <p>Home</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
