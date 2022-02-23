import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import "../../css/auth.css";
import { logInUser } from "../../storageActions";

const validate = (values, storageUsers) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (
    !storageUsers.filter((user) => user.email === values.email).length
  ) {
    errors.email = `User with email ${values.email} doesn't exist`;
  } else if (
    storageUsers
      .filter((user) => user.email === values.email)
      .filter((user) => user.password !== values.password).length
  ) {
    errors.password = "Wrong password";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const LoginForm = ({ storageUsers, setUser }) => {
  /*
   * variables
   */

  const initialValues = {
    email: "",
    password: "",
  };
  /*
   * hooks
   */
  const navigate = useNavigate();
  const [showIcon, setShowIcon] = useOutletContext();
  const [formValues, setFormValues] = useState(initialValues);
  const [errorValues, setErrorValues] = useState({});
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    setShowIcon(true);
    if (Object.keys(errorValues).length === 0 && submited) {
      logInUser(formValues.email, formValues.password);
      setUser({ email: formValues.email, password: formValues.password });
      navigate("/home");
    }
  }, [errorValues]);
  /*
   * functions
   */
  const reset = () => {
    setFormValues(initialValues);
    setErrorValues({});
    setSubmited(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setSubmited(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorValues(validate(formValues, storageUsers));
  };

  return (
    <div className="google-login-page margin-top">
      <form className="form glassmorphism" onSubmit={handleSubmit}>
        <div>
          <input
            name="email"
            type={"email"}
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
            value={formValues.password}
            onChange={handleChange}
            autoComplete="on"
            className="without-border"
          ></input>
          <p className="error-message">{errorValues.password}</p>
        </div>

        <button
          className="btn red-btn btn-full-w text-w-6 border"
          type="submit"
        >
          Log In
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

export default LoginForm;
