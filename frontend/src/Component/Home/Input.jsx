import { useContext, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { addCommentApi, getCommentsByPostId } from "../../Auth/comment";
import loginContext from "../Context/Context";
import ComentList from "./ComentList";
import "./comment.css";

function Input({ id }) {
  const [inp, setInput] = useState({ comment: "" });
  const [inputdata, setInputdata] = useState([]);
  const { data } = useContext(loginContext);
  const [comment, setComment] = useState(false);
  const ansRef = useRef();

  const question = useSelector((storeData) => {
    return storeData.post.post[0].filter((el) => {
      return el.id === id;
    });
  });

  let handle = (e) => {
    e.preventDefault();
    addCommentApi(id, data.data.id, data.data.name, ansRef.current.value);
    // console.log(id, ansRef.current.value, data.data.id);

    // let post_comment = question[0].post_comment || [];
    // post_comment.push(inp);
    // let post_no_of_comment = post_comment.length;

    // let obj = {
    //   post_comment,
    //   post_no_of_comment,
    // };

    // fetch(`https://kind-gold-dove-belt.cyclic.app/posts/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify(obj),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data", data);
    ansRef.current.value = "";
    //   })
    //   .catch((err) => console.log(err));
  };
  const change = async () => {
    // async function name() {
    var a = await getCommentsByPostId(id);
    setInputdata(a.data);
    // console.log(a.data);
    // console.log(inputdata);
    // }
    // name();

    setComment(!comment);
    console.log(comment);
  };

  return (
    <div className="commenets">
      <form className="formcomment" onSubmit={handle}>
        <input
          type="text"
          name="comment"
          ref={ansRef}
          placeholder="enter comment"
          onChange={(e) => {
            setInput({ comment: e.target.value });
          }}
        />
        <input type="submit" value="submit" />
      </form>
      <span onClick={change}>Read Comments</span>
      {comment ? <ComentList id={id} newdata={inputdata} /> : ""}
    </div>
  );
}

export default Input;
