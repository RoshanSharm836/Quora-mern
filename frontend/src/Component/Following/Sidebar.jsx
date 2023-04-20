import React from "react";
import Footer from "../Home/Footer";
import Sidebar_Button from "./Sidebar_Button";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <Sidebar_Button
          img="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
          name="food"
        />
        <Sidebar_Button
          img="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
          name="Science"
        />
        <Sidebar_Button
          img="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
          name="Health"
        />
        <Sidebar_Button
          img="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
          name="Web Devlopment"
        />
        <Sidebar_Button
          img="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
          name="Learning Program"
        />
        <Sidebar_Button
          img="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
          name="Books"
        />
        <Sidebar_Button
          img="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
          name="Movies"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Sidebar;