import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import "../../css/auth.css";
import { allStorage, signUpUser } from "../../storageActions";

const validate = (values) => {
  const storageUsers = allStorage();
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

const SignUpForm = ({ storageUsers, setUser }) => {
  /*
   * variables
   */
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  /*
   * hooks
   */
  const [formValues, setFormValues] = useState(initialValues);
  const [errorValues, setErrorValues] = useState({});
  const [submited, setSubmited] = useState(false);
  const [showIcon, setShowIcon] = useOutletContext();

  useEffect(() => {
    setShowIcon(true);
    if (Object.keys(errorValues).length === 0 && submited) {
      console.log(formValues);
      signUpUser(
        formValues.firstName,
        formValues.lastName,
        formValues.email,
        formValues.password
      );
      setUser({ email: formValues.email, password: formValues.password });
    }
  }, [errorValues]);
  /*
   * functions
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorValues(validate(formValues));
    setSubmited(true);
  };
  const reset = () => {
    setFormValues(initialValues);
    setErrorValues({});
    setSubmited(false);
  };

  return (
    <div className="google-signup-page margin-top">
      <form className="form glassmorphism" onSubmit={handleSubmit}>
        <div>
          <input
            name="firstName"
            type={"text"}
            placeholder="First name..."
            value={formValues.firstName}
            onChange={handleChange}
            autoComplete="on"
            className="without-border"
          ></input>
          <p className="error-message">{errorValues.firstName}</p>
        </div>
        <div>
          <input
            name="lastName"
            type={"text"}
            autoComplete="on"
            placeholder="Last name..."
            value={formValues.lastName}
            onChange={handleChange}
            className="without-border"
          ></input>
          <p className="error-message">{errorValues.lastName}</p>
        </div>
        <div>
          <input
            name="email"
            type={"email"}
            placeholder="Email..."
            value={formValues.email}
            onChange={handleChange}
            autoComplete="on"
            className="without-border"
          ></input>
          <p className="error-message">{errorValues.email}</p>
        </div>
        <div>
          <input
            name="password"
            type={"password"}
            placeholder="Password..."
            autoComplete="on"
            value={formValues.password}
            onChange={handleChange}
            className="without-border"
          ></input>
          <p className="error-message">{errorValues.password}</p>
        </div>
        <button
          className="btn red-btn btn-full-w text-w-6 btn-radius"
          type="submit"
        >
          Sign Up
        </button>
        <button
          className="btn black-btn btn-full-w text-w-6 btn-radius"
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
