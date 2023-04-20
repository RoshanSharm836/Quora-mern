import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SinglePost.css";
function SinglePost({
  id,
  postid,
  logo,
  name,
  answer,
  topic,
  body,
  img,
  view,
  date,
  vote,
  comment,
}) {
  const ref = useRef();
  const [state, setState] = useState(vote);
  const [input, setInput] = useState(false);
  console.log("id", id);
  const handle = () => {
    fetch(`https://kind-gold-dove-belt.cyclic.app/posts/${postid}`, {
      method: "PATCH",
      body: JSON.stringify({
        upvotes: vote + 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setState(json.upvotes);
      });
  };
  const change = () => {
    setInput(!input);
  };
  return (
    <div className="SinglePost">
      <div className="SinglePost-head">
        <img src={logo} alt="logo" width="40px" height="40px" />
        <div className="SinglePost-deatail">
          <div>
            <span className="black">{name}</span>
            <span className="follow">Follow</span>
          </div>
          <div>
            {answer} <i class="fa-solid fa-shield"></i> {date}
          </div>
        </div>
      </div>
      <div className="SinglePost-body">
        <div>
          <NavLink to={`/answer/${id}`}>
            <h3 className="black">{topic}</h3>
          </NavLink>
          <span>{body}</span>
        </div>
        <img src={img} alt="post-img" width="100%" />
      </div>
      <div className="SinglePost-tail">
        <button onClick={handle}>
          <i class="fa-regular fa-thumbs-up"></i>
          {state}
        </button>
        <button>
          <i class="fa-regular fa-thumbs-down"></i>
        </button>
        <span onClick={change}>
          <i class="fa-regular fa-comment"></i> {comment}
        </span>
        <span>
          <i class="fa-solid fa-retweet"></i> {view}
        </span>
      </div>
    </div>
  );
}

export default SinglePost;