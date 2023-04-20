import styles from "./Login.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import SignupPopup from "../../Component/SignupPopup/SignupPopup";
import { useNavigate } from "react-router-dom";
import { getToken, loginApi } from "../../Auth/user";
import loginContext from "../../Component/Context/Context";
// import loginContext from "../../Component/Context/Context";
// import loginContext from "../Context/Context";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [signup, setSignup] = useState(false);

  const { setData, setAuth, IsAuth, data } = useContext(loginContext);
  // console.log("Is Auth", IsAuth);

  useEffect(() => {
    handle();
  }, [setAuth]);

  async function handle() {
    const a = await getToken();
    setData(a.data);
    // console.log("private", data);
    if (data.auth) {
      alert("Login");
      setAuth(() => true);
      navigate("/Home");
    } else {
      // console.log("private false");
      setAuth(() => false);
    }
  }

  let loginUser = () => {
    loginApi(emailRef.current.value, passwordRef.current.value)
      .then((response) => {
        // console.log("ajhdku", response.data.token);
        const token = response.data.token;
        localStorage.setItem("auth-token", token);
        setAuth(true);
        navigate("/Home");
      })
      .catch((err) => {
        alert("invalid email");
        // console.log(err);
      });
  };

  return (
    <div className={styles.Login}>
      <div className={styles.LoginBox}>
        <div className={styles.heading}>
          <img
            src="data:image/png;base64,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"
            alt="quora"
          />
          <div>A place to share knowledge and better understand the world</div>
        </div>
        <div className={styles.centerDiv}>
          <div>
            <p>
              By continuing you indicate that you agree to Quora’s Terms of
              Service and Privacy Policy.
            </p>
            <div>
              <img
                src="https://www.ivyboost.com/wp-content/uploads/2017/07/google-logo-icon-PNG-Transparent-Background.png"
                alt="google"
              />
              Continue with Google
            </div>
            <div>
              <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
                alt="facebook"
              />
              Continue with Facebook
            </div>
            <div
              onClick={() => {
                setSignup(true);
              }}
            >
              Sign up with email
            </div>
          </div>
          <div>
            <h4>Login</h4>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              ref={emailRef}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              ref={passwordRef}
            />
            <div>
              <span>Forgot password?</span>
              <button onClick={loginUser}>Login</button>
            </div>
          </div>
        </div>
        <div className={styles.langDiv}>
          <span>
            বাংলা <i class="fa-solid fa-angle-right"></i>
          </span>
          <span>
            हिन्दी <i class="fa-solid fa-angle-right"></i>
          </span>
        </div>
        <div className={styles.footerDiv}>
          About . Careers . PrivacyTerms . Contact . Languages . Your Ad Choices
          . Press© . Quora, Inc. 2023
        </div>

        <SignupPopup signup={signup} setSignup={setSignup} />
      </div>
    </div>
  );
}
