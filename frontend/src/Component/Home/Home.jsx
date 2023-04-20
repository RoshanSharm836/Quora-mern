import React from "react";
import Ad from "./Ad";
import Main from "./Main";
import Sidebar from "./Sidebar";
import "./Home.css";
function Home() {
  return (
    <div className="container">
      <div className="home">
        <Sidebar />
        <div></div>
        <Main />
      </div>
      <Ad />
    </div>
  );
}

export default Home;
