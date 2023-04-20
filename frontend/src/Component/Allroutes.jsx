import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Following from "../Pages/Folllowing/Following";
import Answer from "../Pages/Answer/Answer";
import { Route, Routes } from "react-router-dom";
import Private from "./Home/Private";
import PostAnswer from "./Home/PostAnswer";
import PrivateRoute from "../Pages/PrivateRoute";
import Login from "../Pages/Login/Login";
import SingleQuestion from "../Pages/SingleQuestion/SingleQuestion";
import Main from "./Home/Main";
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Home"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <Home />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/answer"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <Answer />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/answer/:id"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <SingleQuestion />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/following"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <Following />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/private/:url"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                {/* <Home /> */}
                <Private />
              </>
            </PrivateRoute>
          }
        />
        <Route path="/post/:id" element={<PostAnswer />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default Allroutes;
