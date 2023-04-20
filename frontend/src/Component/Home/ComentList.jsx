import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { getCommentsByPostId } from "../../Auth/comment";
import loginContext from "../Context/Context";
import "./comment.css";
export default function ComentList({ id, newdata }) {
  const { data } = useContext(loginContext);
  // useEffect(() => {
  //   name();
  // }, []);

  // const data = useSelector((storeData) => {
  //   return storeData.post.post[0].filter((el) => {
  //     return el.id === id;
  //   });
  // });

  //   console.log("asdsad", data);
  // let newdata = data[0].post_comment;
  // console.log("data", newdata);

  // let newdata;
  console.log(newdata);
  return (
    <div>
      {newdata?.map((el, i) => {
        return (
          <div className="comment-el" key={i}>
            <img
              src="https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?pid=ImgDet&rs=1"
              alt="logo"
              width="50px"
              height="50px"
            />
            <div>
              <span>{el.username}</span>
              <p>{el.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
