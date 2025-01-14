import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar"; // Assuming Sidebar is a component
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import "./App.css";

const App = () => {
  const [sidebar, setSidebar] = useState(false); // State to manage sidebar visibility

  return (
    <div className="app">
      <BrowserRouter>
        {/* Navbar with the ability to toggle the sidebar */}
        <Navbar setSidebar={setSidebar} />

        <div className="main-layout">
          {/* Sidebar controlled by the state */}
          <Sidebar sidebar={sidebar} />

          {/* Main content area */}
          <div className={`content ${sidebar ? "content-sidebar-open" : ""}`}>
            <Routes>
              <Route path="/" element={<Home sidebar={sidebar} />} />
              <Route
                path="/video/:categoryId/:videoId"
                element={<Video sidebar={sidebar} />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
