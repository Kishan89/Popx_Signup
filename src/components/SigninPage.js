import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SigninPage.css";

const SigninPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      navigate("/account", {
        state: {
          fullName: storedUser.fullName,
          email: storedUser.email
        },
      });
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="signin-page-wrapper">
      <div className="signin-container">
        <h2>Signin to your</h2>
        <h3>PopX account</h3>
        <p className="tagline">Lorem ipsum dolor sit amet,</p>
        <p className="tagline">consectetur adipiscing elit,</p>
        <form className="signin-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="primary-btn1" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;