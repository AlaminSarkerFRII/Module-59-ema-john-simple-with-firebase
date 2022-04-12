import React, { useState } from "react";
// import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  // const [user] = getAuth(auth);
  const [user] = useAuthState(auth);
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
    const shipping = { name, address, email, phone };
    console.log(shipping);
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
              value={user?.email}
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
      </div>

      <h2>Shipment</h2>
    </div>
  );
};

export default Shipment;
