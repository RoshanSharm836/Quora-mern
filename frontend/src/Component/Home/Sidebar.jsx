import React from "react";
import Footer from "./Footer";
import Sidebar_Button from "./Sidebar_Button";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <Sidebar_Button
          img="https://th.bing.com/th/id/OIP.9bFXyAM9Aoxp_xol99FRMwHaFj?pid=ImgDet&rs=1"
          name="Science"
        />
        <Sidebar_Button
          img="https://th.bing.com/th/id/OIP.iDpJUpmMo4CFMya8YYBSWQHaE8?w=258&h=180&c=7&r=0&o=5&pid=1.7"
          name="Health"
        />
        <Sidebar_Button
          img="https://th.bing.com/th/id/OIP.Xs1a4zx16BLC4LO5XUMNQQHaE8?w=261&h=180&c=7&r=0&o=5&pid=1.7"
          name="Technology"
        />
        <Sidebar_Button
          img="https://th.bing.com/th/id/OIP.t2rQXCTN7EioZMJSL43brAHaE7?w=251&h=180&c=7&r=0&o=5&pid=1.7"
          name="Sports"
        />
        <Sidebar_Button
          img="https://th.bing.com/th/id/OIP.1ahEEqqxo93R_moCetTX_AHaHa?pid=ImgDet&rs=1"
          name="Movies"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Sidebar;
