import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import Logo from "../../images/icons8-google.svg";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  //set state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //create auth useCreateUserWithEmailAndPassword
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  // event handler
  // for email
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  //handler for password
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  //confirm password

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  // form submit

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("password didn't match");
      return;
    }
    if (password.length < 6) {
      setError("password must be contains at last 6 characters ");
      return;
    }

    if (user) {
      navigate("/shop");
    }

    createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="login-form-container">
      <div>
        <h2 className="form-title">Please Sign Up </h2>
        <form onSubmit={handleCreateUser}>
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
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}> {error}</p>

          <input className="submit-btn" type="submit" value="sign up" />
        </form>
        <p>
          Already have an account ?
          <Link className="form-link" to="/login">
            Login
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

export default SignUp;
