import Styles from "./NewQuestion.module.css";
import { useRef } from "react";
import { questions as url } from "../../Api/Url";
export default function NewQuestion({ setTrigger }) {
  const questionRef = useRef();
  const categoryRef = useRef();

  let addNewQuestion = () => {
    let ques = {
      question: questionRef.current.value,
      category: categoryRef.current.value,
      no_of_answers: 0,
      last_followed: "10s",
      followed_by: 1,
      answers: []
    };

    fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(ques),
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data);
        // alert('Your question has been posted');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={Styles.NewQuestion}>
      <div className={Styles.tipsDiv}>
        <h4>Tips on getting good answers quickly</h4>
        <ul>
          <li>Make sure your question has not been asked already</li>
          <li>Keep your question short and to the point</li>
          <li>Double-check grammar and spelling</li>
        </ul>
      </div>
      <div className={Styles.accessDiv}>
        <img
          src="https://ca.slack-edge.com/T03BHDQT1GT-U03E83063EF-eca94e08ed07-512"
          alt="avatar"
          style={{ width: "15px", borderRadius: "50%" }}
        />
        <i class="fa-solid fa-play"></i>
        <select name="category" id="category" ref={categoryRef}>
          <option value="Science">Science</option>
          <option value="Health">Health</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Movies">Movies</option>
        </select>
      </div>
      <div className={Styles.NewQuestionDiv}>
        <input
          type="text"
          placeholder='Start your question with "What", "How", "Why", etc.'
          ref={questionRef}
        />
      </div>
      <div className={Styles.bottomDiv}>
        <button
          onClick={() => {
            setTrigger(false);
          }}
        >
          Cancel
        </button>
        <button onClick={addNewQuestion}>Add question</button>
      </div>
    </div>
  );
}
