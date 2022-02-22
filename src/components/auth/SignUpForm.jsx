import React, { createRef } from "react";
import { useNavigate } from "react-router-dom";

import "../../css/auth.css";

const validate = (values, storageUsers) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (
    values.email &&
    storageUsers.filter((user) => user.email === values.email).length
  ) {
    errors.email = `User with email ${values.email} already exist`;
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
    <div style={{ textAlign: "center" }}>
      <input {...input} placeholder={label} type={type} />
      <div className="error-message">
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  </div>
);

const SignUpForm = ({ storageUsers }) => {
  const navigate = useNavigate();

  const errorRef = createRef("");

  const onSignUpFormSubmit = (values) => {
    navigate("/auth/account");
  };

  const handleSubmit = () => {};
  const reset = () => {};
  return (
    <div className="google-signup-page margin-top">
      <form className="form glassmorphism" onSubmit={handleSubmit}>
        <input
          name="firstName"
          type={"text"}
          autoComplete="off"
          className="without-border"
        ></input>
        <input
          name="lastName"
          type={"text"}
          autoComplete="off"
          className="without-border"
        ></input>
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
        <button className="btn red-btn btn-full-w text-w-6" type="submit">
          Sign Up
        </button>
        <button
          className="btn black-btn btn-full-w text-w-6"
          type="button"
          onClick={reset}
        >
          Clear Values
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
