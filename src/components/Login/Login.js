import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Logo from "../../images/icons8-google.svg";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // handle email and password
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="login-form-container">
      <div>
        <h2 className="form-title">Please login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>Loading...</p>}
          <input className="submit-btn" type="submit" value="login" />
        </form>
        <p>
          New to ema-john ?
          <Link className="form-link" to="/signup">
            create an account
          </Link>
        </p>
        <div className="hr-line">
          <h2>
            <hr />
          </h2>
          <p>or</p>
          <h2>
            <hr />
          </h2>
        </div>
        <button className="google-sign">
          <img src={Logo} alt="" />
          <h2>Sign In with google</h2>
        </button>
      </div>
    </div>
  );
};

export default Login;
