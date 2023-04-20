import React, { useContext, useState } from "react";
import { Home } from "@mui/icons-material";
import "./Navbar.css";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Link, useNavigate } from "react-router-dom";
// import loginContext from "../Context/Context";
// import Post from "../Home/Post";
import { Button } from "@chakra-ui/react";
import loginContext from "../Context/Context";
// import { user } from "../../Api/Url";
function Navbar() {
  let Navigate = useNavigate();
  const { setData, setAuth, IsAuth, data } = useContext(loginContext);

  return (
    <div className="qHeader">
      <Link className="qHeader__logo" to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
          alt=""
        />
      </Link>

      <div className="qHeader__icons">
        <Link className="active qHeader__icon" to={"/"}>
          <Home />
        </Link>

        <Link className="qHeader__icon" to={"/following"}>
          {" "}
          <ArticleIcon />
        </Link>

        <Link className="qHeader__icon" to={"/answer"}>
          {" "}
          <AssignmentTurnedInIcon />
        </Link>

        <Link className="qHeader__icon">
          {" "}
          <PeopleAltIcon />
        </Link>

        <Link className="qHeader__icon">
          {" "}
          <NotificationsNoneIcon />
        </Link>
      </div>
      {/* <div className="qHeader__input"> 
        <SearchIcon />
        <input type="text" placeholder="Search Quora" />
      </div>*/}
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <img
            style={{ width: "40px", height: "40px", borderRadius: "25px" }}
            className="Avatar"
            alt="Remy Sharp"
            src="https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?pid=ImgDet&rs=1"
          ></img>
        </div>
        <button style={{ margin: "0 10px" }}>{data.data.name}</button>
        <Button
          onClick={() => {
            setAuth(false);
            localStorage.removeItem("auth-token");
            Navigate("/");
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
