import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../Api/Url";
import { getToken } from "../Auth/user";
import loginContext from "../Component/Context/Context";
function PrivateRoute({ children }) {
  const { setData, setAuth, IsAuth, data } = useContext(loginContext);

  const navigate = useNavigate();
  useEffect(() => {
    handle();
  }, []);

  async function handle() {
    const a = await getToken();
    setData(a.data);
    // console.log("private", data);
    if (data.auth) {
      // console.log("private false");
      setAuth(() => true);
      // navigate("/");
    } else {
      // console.log("private false");
      setAuth(() => false);
    }
  }

  if (IsAuth === true) {
    return children;
  } else if (IsAuth === false) {
    return navigate("/");
  }
}

export default PrivateRoute;
