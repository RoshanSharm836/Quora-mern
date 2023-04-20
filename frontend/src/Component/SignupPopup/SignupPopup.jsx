import styles from "./SignupPopup.module.css";
import { useRef } from "react";
import { registerApi } from "../../Auth/user";

export default function SignupPopup({ signup, setSignup }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  let registerNewUser = async () => {
    await registerApi(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((res) => {
        alert("signup done!");
        console.log("sda");
        setSignup(false);
      })
      .catch((err) => {
        setSignup(false);
      });
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify(newUser),
    // })
    //   .then((res) => res.json())
    //   .then((user) => {
    //     console.log(user);
    //     setSignup(false);
    //   })
    //   .catch((err) => console.log(err));
  };

  return signup ? (
    <div className={styles.SignupPopup}>
      <i
        class="fa-solid fa-x"
        onClick={() => {
          setSignup(false);
        }}
      ></i>
      <h3>Signup</h3>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="What would you like to be called?"
          ref={nameRef}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          ref={emailRef}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          ref={passwordRef}
        />
      </div>
      <div>
        <button onClick={registerNewUser}>Submit</button>
      </div>
    </div>
  ) : (
    ""
  );
}
