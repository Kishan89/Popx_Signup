import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/account", {
      state: {
        fullName: formData.fullName,
        email: formData.email,
      },
    });
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signup-container">
        <h2 className="title">Create your</h2>
        <h3 className="subtitle">PopX account</h3>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName" className="label">
              Full Name<span className="required">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="label">
              Phone number<span className="required">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Marry Doe"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label">
              Email address<span className="required">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Marry Doe"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="label">
              Password<span className="required">*</span>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company" className="label">
              Company name
            </label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="Marry Doe"
              value={formData.company}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <p className="radio-label">
              Are you an Agency?<span className="required">*</span>
            </p>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={formData.agency === "Yes"}
                  onChange={handleChange}
                  className="radio-input"
                  required
                />
                <span className="radio-text">Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={formData.agency === "No"}
                  onChange={handleChange}
                  className="radio-input"
                  required
                />
                <span className="radio-text">No</span>
              </label>
            </div>
          </div>

          <button type="submit" className="primary-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;