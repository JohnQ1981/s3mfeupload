import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p>DASHBOARD SIGNUP FORM 1- this is from dashboard</p>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <Button component={RouterLink} to="/pricing">
        CreateUser
      </Button>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
