import React, { useState } from "react";
import Logo from "../../images/icons8-google.svg";
import { Link } from "react-router-dom";

const Shipment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  //   const navigate = useNavigate();

  // name

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  // for email
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  //handler for password
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  //confirm password

  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-form-container">
      <div>
        <h2 className="form-title">Shipping Information </h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name"> Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
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
            <label htmlFor="text">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">phone number</label>
            <input
              onBlur={handlePhoneBlur}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}> {error}</p>

          <input className="submit-btn" type="submit" value="Add Shipping" />
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

export default Shipment;
