import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "../../images/icons8-google.svg";
const Login = () => {
  return (
    <div className="login-form-container">
      <div>
        <h2 className="form-title">Please login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>
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
