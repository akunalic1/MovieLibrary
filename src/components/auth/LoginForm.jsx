import React, { Component, createRef } from "react";
import { useNavigate } from "react-router-dom";

import "../../css/auth.css";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const renderField = ({
  input,
  type,
  label,
  meta: { touched, error, warning },
}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} />
      <div className="error-message">
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  </div>
);

const LoginForm = ({ storageUsers }) => {
  const navigate = useNavigate();
  const errorRef = createRef();

  const onLoginFormSubmit = (values) => {
    if (storageUsers) {
      if (!storageUsers.filter((user) => user.email === values.email).length) {
        errorRef.current.textContent = `User with email ${values.email} doesn't exist`;
      } else if (
        storageUsers
          .filter((user) => user.email === values.email)
          .filter((user) => user.password !== values.password).length
      ) {
        errorRef.current.textContent = "Wrong password";
      } else {
        navigate("/auth/account");
      }
    }
  };

  const handleSubmit = () => {};
  return (
    <div className="google-login-page margin-top">
      <form className="form glassmorphism" onSubmit={handleSubmit}>
        <input
          name="email"
          type={"email"}
          autoComplete="off"
          className="without-border"
        ></input>
        <input
          name="password"
          type={"password"}
          autoComplete="off"
          className="without-border"
        ></input>
        <p ref={errorRef} className="error-message"></p>
        <button
          className="btn red-btn btn-full-w text-w-6 border"
          type="submit"
        >
          Log In
        </button>
        <button className="btn black-btn btn-full-w text-w-6" type="button">
          Clear Values
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
