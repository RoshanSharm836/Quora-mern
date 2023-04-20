import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SinglePost from "./SinglePost";
function Main() {
const [State, setState] = useState([])
  useEffect(() => {
    fetch(`https://kind-gold-dove-belt.cyclic.app/posts`)
      .then((res) => res.json())
      .then((data) => {
        setState(data)
      })
  }, []);

  return (
    <div className="main">
      {State.length==0?"....Loading":State.map((el, i) => {
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
                view={el.views}
                vote={el.upvotes}
                comment={el.comments}
              />
            );
          })}
    </div>
  );
}

export default Main;