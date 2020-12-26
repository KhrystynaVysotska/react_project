import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import CustomTextInput from "../inputs/CustomTextInput";
import Login from "./Login";
import Button from "@material-ui/core/Button";
import AccountCircleIconStyled from "../styles/AccountCircleIcon.styled";
import EntryFormStyled from "../styles/EntryForm.styled";
import * as Yup from "yup";
import StyledForm from "../styles/LoginRegisterForm.styled.js";
import registrationImage from "../../images/registrationImage.png";

function Registration({ login }) {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    retypedpassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(2, "Must be at least 2 characters")
      .max(50, "Must be 50 characters or less")
      .required("This is a required field"),
    email: Yup.string()
      .email("Email format is incorrect")
      .required("This is required field"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .max(20, "Must be 20 characters or less")
      .required("This is required field"),
    retypedpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords don't match")
      .required("Confirm Password is required"),
  });

  return (
    <EntryFormStyled>
      <Formik
        isInitialValid={false}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(credentials) => {
          login(credentials);
        }}
      >
        <StyledForm>
          <img alt="login" src={registrationImage} />
          <div className="form">
            <AccountCircleIconStyled style={{ fontSize: "84px" }} />
            <h1 className="sign_up_title">Sign Up</h1>
            <div className="registration_fields">
              <CustomTextInput
                className="username"
                label="Username"
                name="username"
                type="text"
                required
              />
              <CustomTextInput
                className="email"
                label="Email"
                name="email"
                type="text"
                required
              />
              <CustomTextInput
                className="password"
                label="Password"
                name="password"
                type="password"
                required
              />
              <CustomTextInput
                className="retypedpassword"
                label="Confirm password"
                name="retypedpassword"
                type="password"
                required
              />
            </div>
            <p className="is_member">
              Already a member? <Link to="/login">Sign in</Link>
            </p>
            <Button style={{ color: "rgb(72 110 163)" }} type="submit">
              Sign me up
            </Button>
          </div>
        </StyledForm>
      </Formik>
    </EntryFormStyled>
  );
}

export default Registration;
