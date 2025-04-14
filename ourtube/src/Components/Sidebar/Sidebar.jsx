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

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "open-sidebar" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-link " onClick={() => setCategory(0)}>
          <HomeIcon className="icon" />
          <p>Home</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <SportsEsportsIcon className="icon" />
          <p>Gaming</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <DirectionsCarIcon className="icon" />
          <p>Automobiles</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <SportsBasketballIcon className="icon" />
          <p>Sports</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <TvIcon className="icon" />
          <p>Entertainment</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <ComputerIcon className="icon" />
          <p>Tech</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <LibraryMusicIcon className="icon" />
          <p>Music</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <BookIcon className="icon" />
          <p>Blogs</p>
        </div>
        <div className="side-link" onClick={() => setCategory(0)}>
          <NewspaperIcon className="icon" />
          <p>News</p>
        </div>
        <hr />
      </div>

      <div className="side-link"></div>
    </div>
  );
};

export default Sidebar;
