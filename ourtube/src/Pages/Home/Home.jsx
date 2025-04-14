import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        {/* checking if sidebar is true, if so, it will provide an empty string and if it is false, it will provide a new classname. */}

        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
