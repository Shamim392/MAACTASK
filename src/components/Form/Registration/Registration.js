import axios from "axios";
import React, { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const url = "https://staging-api.erpxbd.com/api/v1/users/signup";
  const [data, setData] = useState({
    name: "",
    email: "",
    employeeId: "",
    password: "",
    passwordConfirm: "",
    role: "",
    phoneNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        email: data.email,
        employeeId: data.employeeId,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        role: data.role,
        phoneNumber: data.phoneNumber,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };

  return (
    <div className="reg-container">
      <form onSubmit={handleSubmit} className="form-section">
        <div className="input-form">
          <h1>Create Account</h1>
          <p className="regTest">
            Fill in the details below to create an account
          </p>
          <input
            className="regInput"
            onChange={(e) => handleOnChange(e)}
            id="name"
            value={data.name}
            type="text"
            name="name"
            required
            placeholder="Enter Your Full Name"
          />
          <input
            className="regInput"
            onChange={(e) => handleOnChange(e)}
            id="email"
            value={data.email}
            type="email"
            name="email"
            required
            placeholder="Enter Your Full Email"
          />
          <input
            className="regInput"
            type="text"
            name="employeeId"
            required
            placeholder="Your ID"
          />
          <input
            className="regInput"
            onChange={(e) => handleOnChange(e)}
            id="tel"
            value={data.tel}
            type="tel"
            name="name"
            required
            placeholder="Enter Your Mobile Number"
          />
          <input
            className="regInput"
            onChange={(e) => handleOnChange(e)}
            id="password"
            value={data.password}
            type="password"
            name="password"
            required
            placeholder="Password"
          />
          <input
            className="regInput"
            onChange={(e) => handleOnChange(e)}
            id="passwordConfirm"
            value={data.passwordConfirm}
            type="password"
            name="passwordConfirm"
            required
            placeholder="Confirm Password"
          />
          <input
            className="regInput"
            onChange={(e) => handleOnChange(e)}
            value={data.browser}
            list="role"
            name="role"
            id="browser"
            required
            placeholder="Enter Your Role"
          />
          <datalist className="list" id="role">
            <option className="list" value="A" />
            <option value="B" />
          </datalist>
          <div className="checkbox-div">
            <input
              onChange={(e) => handleOnChange(e)}
              id="chekbos"
              value={data.checkbox}
              className="input-check"
              required
              type="checkbox"
              name="checkbox"
            />

            <label className="condition" for="checkbox">
              {" "}
              I read and agree to the Terms & Conditions
            </label>
          </div>
          <input className="submit" type="submit" value="Create Account" />
          <div className="account">
            <span>Already have an account?</span>
            <a href="/login">Login</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
