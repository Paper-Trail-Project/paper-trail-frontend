import React, { useState } from "react";
import "../Styles/Login.css";

export default function Login(props) {

  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
    // console.log(userData)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div id="landing-page-container">
      <h1 id="page-title">Monster Money</h1>
      <div id="Login-container">
        <form id="Login-form" onSubmit={handleSubmit}>
          <input
            className="Login-input"
            name="username"
            type="text"
            placeholder="Username"
            required
            value={userData.username}
            onChange={handleChange}
          ></input>
          <input
            className="Login-input"
            name="password"
            type="password"
            placeholder="Password"
            value={userData.password}
            required
            onChange={handleChange}
          ></input>
          <button id="Login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

