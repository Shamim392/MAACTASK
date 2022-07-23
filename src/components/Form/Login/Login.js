import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-container">
      <form action="" className="form-section">
        <div className="input-form">
          <h1>Welcome Back</h1>
          <p className="logintext">Please login to your account</p>
          <input
            className="loginInput"
            type="email"
            placeholder="Enter Your Full Email"
          />{" "}
          <input
            className="loginInput"
            type="password"
            placeholder="Password"
          />
          <input
            className="submit loginInput"
            type="submit"
            value="Create Account"
          />
          <div className="signup">
            <p>Don't have any account?</p>
            <a href="/registration">Signup</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
