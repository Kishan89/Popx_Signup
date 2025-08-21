import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AccountSettings.css";

const AccountSettings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });

  useEffect(() => {
    // Try to get user data from the navigation state first
    const stateUser = location.state;
    // Then try from localStorage for persistence on refresh
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (stateUser?.fullName && stateUser?.email) {
      setUser(stateUser);
    } else if (storedUser?.fullName && storedUser?.email) {
      setUser({
        fullName: storedUser.fullName,
        email: storedUser.email,
      });
    } else {
      // If no user data is found in either place, redirect to signup
      navigate("/signup");
    }
  }, [location.state, navigate]);

  return (
    <div className="account-settings-wrapper">
      <div className="account-card">
        <h2>Account Settings</h2>
        <div className="account-card-body">
          <div className="profile-row">
            <div className="profile-image">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_1280.png"
                alt="Profile"
              />
              <div className="camera-icon">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/24/ffffff/camera.png"
                  alt="Camera Icon"
                />
              </div>
            </div>
            <div className="profile-info">
              <h3>{user.fullName}</h3>
              <p>{user.email}</p>
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;