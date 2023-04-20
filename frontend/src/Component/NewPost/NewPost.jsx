import styles from "./NewPost.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import loginContext from "../Context/Context";
import { addPost } from "../../Auth/post";
export default function NewPost() {
  const { data } = useContext(loginContext);
  const postRef = useRef();
  const postTitle = useRef();
  const postImageRef = useRef();
  const [postimage, setPostImage] = useState(false);

  const addNewPost = async (e) => {
    if (postTitle.current.value === "" || postImageRef.current.value === "") {
      alert("Add postTitle or post");
      return;
    }

    let post = {
      username: data.data.name,
      title: postTitle.current.value,
      description: postRef.current.value,
      image: postImageRef.current.value || "",
    };

    console.log(post, data.data.name);
    await addPost(
      postTitle.current.value,
      postRef.current.value,
      data.data.name,
      postImageRef.current.value
    );

    // window.location.reload(true);
  };

  return (
    <div className={styles.NewPost}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?pid=ImgDet&rs=1"
          alt="avatar"
          style={{ height: "40px", borderRadius: "50%" }}
        />
        <div style={{ padding: "10px", borderRadius: "20px" }}>
          <h4>Username</h4>
          <button
            style={{
              backgroundColor: "white",
              color: "grey",
              padding: "5px",
              borderRadius: "20px",
              border: "1px solid grey",
            }}
          >
            Choose Credential <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className={styles.NewPostDiv}>
        <textarea
          name="text"
          id=""
          cols="15"
          rows="2"
          placeholder="Title"
          ref={postTitle}
          required
        ></textarea>
        <textarea
          name="text"
          id=""
          cols="30"
          rows="5"
          placeholder="Say something..."
          ref={postRef}
          required
        ></textarea>
      </div>
      <div className={styles.bottomDiv}>
        <div>
          <span>
            <i class="fa-solid fa-a"></i>
          </span>
          <span
            onClick={() => {
              setPostImage(true);
            }}
          >
            <i class="fa-regular fa-images"></i>
          </span>
          {postimage ? (
            <input
              type="url"
              placeholder="Enter image url"
              ref={postImageRef}
            />
          ) : (
            ""
          )}
        </div>
        <div>
          <button onClick={addNewPost}>Post</button>
        </div>
      </div>
    </div>
  );
}
