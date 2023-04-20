import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar_Button({ img, name }) {
  return (
    <div className="Sidebar_Button">
      <NavLink to={`/private/${name}`}>
        <img src={img} alt="img" width="30px" height="30px" />
        {name}
      </NavLink>
    </div>
  );
}

export default Sidebar_Button;
