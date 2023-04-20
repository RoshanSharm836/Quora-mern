import styles from "./SingleQuestion.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import AnswerPopup from "../../Component/AnswerPopup/AnswerPopup";
import RelatedQuestions from "../../Component/RelatedQuestions/RelatedQuestions";

export default function SingleQuestion({}) {
  const pathParams = useParams();
  const [question, setQuestion] = useState({});
  const [anspopup, setAnsPopup] = useState(false);

  const data = useSelector((storeData) => {
    return storeData.questions.filter((el) => {
      return el.id == pathParams.id;
    });
  });

  useEffect(() => {
    setQuestion(data[0]);
  }, []);

  return (
    <div className={styles.SingleQuestion}>
      <div className={styles.questionDiv}>
        <h2>{question.question}</h2>
        <div className={styles.buttonsDiv}>
          <div className={styles.leftButtons}>
            <button
              onClick={() => {
                setAnsPopup(true);
              }}
            >
              Answer
            </button>
            <button>Follow</button>
            <button>Request</button>
          </div>
          <div className={styles.rightButtons}>
            <button>
              <i class="fa-solid fa-circle-info"></i>
            </button>
            <button>
              <i class="fa-regular fa-comment"></i>
            </button>
            <button>
              <i class="fa-solid fa-down-long"></i>
            </button>
            <button>
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>
        <div className={styles.innerDiv}>
          <img
            src="https://ca.slack-edge.com/T03BHDQT1GT-U03E83063EF-eca94e08ed07-512"
            alt="user-avatar"
          />
          <p>Mayank, can you answer this question?</p>
          <p>People are searching for an answer to this question.</p>
          <button
            onClick={() => {
              setAnsPopup(true);
            }}
          >
            Answer
          </button>
        </div>
        <div className={styles.answers}>
          {data[0].no_of_answers == 0 ? (
            <div>
              <i class="fa-solid fa-pen"></i>
              <span>
                This question does not have any answers yet. In the meantime we
                have included some related questions and answers below.
              </span>
            </div>
          ) : (
            <div>
              <p>Answers</p>
              <ul>
                {data[0].answers.map((el, i) => {
                  return <li key={i}>{el}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <RelatedQuestions category={data[0].category} />
      {anspopup ? (
        <AnswerPopup ques_id={question.id} setAnsPopup={setAnsPopup} />
      ) : (
        ""
      )}
    </div>
  );
}
