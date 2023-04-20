import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SinglePost from "./SinglePost";

function PostAnswer() {
  const { id } = useParams();

  const data = useSelector((store) => {
    return store.post.post[0];
  });
  const newdata = data[id];
  // console.log(id);
  return (
    <div className="Answer">
      <div className="Answer-component">
        <div className="title">
          <h3 className="black">{newdata.title}</h3>
          <div className="icon">
            <div>
              <i class="fa-solid fa-wifi"></i>
              Follow 1<i class="fa-solid fa-user-plus"></i> Request
            </div>
            <div>
              <i class="fa-regular fa-comment"></i>
              <i class="fa-regular fa-thumbs-down"></i>
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
        </div>
        <div style={{ padding: "10px 0" }}>1 Answer</div>
        <SinglePost
          name={newdata.username}
          logo="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?pid=ImgDet&rs=1"
          answer={`Answered by ${newdata.username}`}
          postid={newdata.postid}
          body={newdata.description}
          img={newdata.image}
          view={newdata.views}
          vote={newdata.upvotes}
          comment={newdata.comments}
        />
      </div>
    </div>
  );
}

export default PostAnswer;
