import { useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./AnswerPopup.module.css";
import { useDispatch } from "react-redux";
import answerThunkActionCreater from "../../Redux/Answer/answerThunkAction";
import { questions } from "../../Api/Url";

export default function AnswerPopup({ ques_id, setAnsPopup }) {
  const dispatch = useDispatch();
  const ansRef = useRef();
  const question = useSelector((storeData) => {
    return storeData.questions.filter((el) => {
      return el.id == ques_id;
    });
  });
  //   console.log(question);

  let postAnswer = () => {
    let answers = question[0].answers;
    let newAnswer = ansRef.current.value;
    answers.push(newAnswer);
    let no_of_answers = answers.length;

    let obj = {
      answers,
      no_of_answers,
    };

    fetch(`${questions}/${ques_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(answerThunkActionCreater(`${questions}`));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.AnswerPopup}>
      <span
        className={styles.cancelBtn}
        onClick={() => {
          setAnsPopup(false);
        }}
      >
        <i class="fa-solid fa-xmark"></i>
      </span>
      <div
        style={{ display: "flex", alignItems: "center" }}
        className={styles.credentialDiv}
      >
        <img
          src="https://ca.slack-edge.com/T03BHDQT1GT-U03E83063EF-eca94e08ed07-512"
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
      <div>
        <textarea
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="Write your answer"
          ref={ansRef}
        ></textarea>
      </div>
      <div className={styles.bottomDiv}>
        <div>
          <span>
            <i class="fa-solid fa-a"></i>
          </span>
          <span>
            <i class="fa-regular fa-images"></i>
          </span>
        </div>
        <div>
          <button onClick={postAnswer}>Post</button>
        </div>
      </div>
    </div>
  );
}
