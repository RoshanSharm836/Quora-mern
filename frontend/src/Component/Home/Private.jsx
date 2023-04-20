import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPosts } from "../../Auth/post";
import Store from "../../Store";
import { succ } from "./redux/action";
import SinglePost from "./SinglePost";

function Private() {
  const { url } = useParams();
  useEffect(() => {
    name();
  }, []);

  const reduxdata = useSelector((store) => {
    return store.post;
  });

  async function name() {
    const a = await getPosts();
    console.log("asdnakjnd", a.data);
    Store.dispatch(succ(a.data));
  }
  return (
    <div>
      {reduxdata.isLoading
        ? "Loading..."
        : reduxdata.post[0]
            ?.filter((el) => el.category == url)
            .map((el, i) => {
              return (
                <SinglePost
                  key={i}
                  id={i}
                  postid={el.postid}
                  name={el.username}
                  logo="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
                  answer={`Answered by ${el.username}`}
                  topic={el.title}
                  body={el.description}
                  img={el.image}
                  date={el.date}
                  // view={el.views}
                  // vote={el.upvotes}
                  // comment={el.post_no_of_comment}
                />
              );
            })}
    </div>
  );
}

export default Private;
