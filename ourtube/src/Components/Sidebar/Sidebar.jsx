import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import TvIcon from "@mui/icons-material/Tv";
import ComputerIcon from "@mui/icons-material/Computer";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import BookIcon from "@mui/icons-material/Book";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="shortcut-links">
        <div className="side-link">
          <HomeIcon className="homeicon" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <SportsEsportsIcon className="gamingicon" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <DirectionsCarIcon className="autoicon" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <SportsBasketballIcon className="sportsicon" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <TvIcon className="tvicon" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <ComputerIcon className="techicon" />
          <p>Tech</p>
        </div>
        <div className="side-link">
          <LibraryMusicIcon className="musicicon" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <BookIcon className="blogsicon" />
          <p>Blogs</p>
        </div>
        <div className="side-link">
          <NewspaperIcon className="newsicon" />
          <p>News</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
