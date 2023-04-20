import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { addLikesByPostId, getLikesByPostId } from "../../Auth/comment";
import loginContext from "../Context/Context";
import Input from "./Input";
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
}) {
  const [state, setState] = useState(null);
  const [input, setInput] = useState(false);
  const { data } = useContext(loginContext);

  useEffect(() => {
    like();
  }, []);

  async function like() {
    const vote = await getLikesByPostId(postid, data.data.id);
    // console.log(vote.data.length);
    setState(vote.data.length);
  }

  const handle = async () => {
    const vote = await addLikesByPostId(postid, data.data.id)
      .then(async (res) => {
        // console.log(res);
        var a = await getLikesByPostId(postid, data.data.id);
        setState(a.data.length);
        // console.log("asdadadsasdad", state);
      })
      .catch((err) => console.log(err));
    // const vote =
    // console.log(vote.response.status);

    // setcheck(state + 1);
    // fetch(`https://kind-gold-dove-belt.cyclic.app/posts/${postid}`, {
    //   method: "PATCH",
    //   body: JSON.stringify({
    //     upvotes: vote + 1,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setState(json.upvotes);
    //   });
  };
  const change = () => {
    setInput(!input);
  };
  return (
    <div className="SinglePost">
      <div className="SinglePost-head">
        <img
          src="https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?pid=ImgDet&rs=1"
          alt="logo"
          width="40px"
          height="40px"
        />
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
          <NavLink to={`/post/${id}`}>
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
          <i class="fa-regular fa-comment"></i>
        </span>
        <span>
          <i class="fa-solid fa-retweet"></i> {view}
        </span>
      </div>
      {input ? <Input id={postid} /> : ""}
    </div>
  );
}

export default SinglePost;
