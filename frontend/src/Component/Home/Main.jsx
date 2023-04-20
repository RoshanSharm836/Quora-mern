import React, { useState } from "react";
import { useEffect } from "react";
import SinglePost from "./SinglePost";
import Post from "./Post";
import { succ, req, fail } from "../Home/redux/action";
import Store from "../../Store";
import { useSelector } from "react-redux";
import { getPosts } from "../../Auth/post";
import { useParams } from "react-router-dom";

function Main() {
  // Store.dispatch(req());
  // fetch(`https://kind-gold-dove-belt.cyclic.app/posts`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("data", data);
  //     // Store.dispatch(succ(data));
  //   })
  //   .catch((err) => Store.dispatch(fail()));
  useState([]);
  useEffect(() => {
    name();
  }, []);

  const reduxdata = useSelector((store) => {
    // console.log(store.post?.sort((a, b) => b - a));
    return store.post;
  });

  async function name() {
    const a = await getPosts();
    // console.log("asdnakjnd", a.data.reverse());
    Store.dispatch(succ(a.data));
  }

  const { url } = useParams();
  console.log(url);
  return (
    <div className="main">
      <Post />
      {reduxdata.isLoading
        ? "Loading..."
        : reduxdata.post[0]?.map((el, i) => {
            return (
              <SinglePost
                key={i}
                id={i}
                postid={el._id}
                name={el.username}
                logo="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
                answer={`Answered by ${el.username}`}
                topic={el.title}
                body={el.description}
                img={el.image}
                date={el.date}
                view={el.views}
              />
            );
          })}
    </div>
  );
}

export default Main;
