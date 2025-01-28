import React from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        {/* checking if sidebar is true, if so, it will provide an empty string and if it is false, it will provide a new classname. */}

        <Feed />
      </div>
    </>
  );
};

export default Home;
