import React from "react";
import EntryFormStyled from "../styles/EntryForm.styled";
import { Link } from "react-router-dom";
import AccountCircleIconStyled from "../styles/AccountCircleIcon.styled";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomTextInput from "../inputs/CustomTextInput";
import StyledForm from "../styles/LoginRegisterForm.styled.js";
import Button from "@material-ui/core/Button";
import loginImage from "../../images/loginImage.png";

function Login({ login }) {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email format is incorrect")
      .required("This is required field"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .max(20, "Must be 20 characters or less")
      .required("This is required field"),
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
          <img alt="login" src={loginImage} />
          <div className="form">
            <AccountCircleIconStyled style={{ fontSize: "84px" }} />
            <h1 className="sign_in_title">Sign In</h1>
            <div className="login_fields">
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
            </div>
            <p className="not_a_member">
              Not a member? <Link to="/registration">Sign up</Link>
            </p>
            <Button style={{ color: "rgb(72 110 163)" }} type="submit">
              Login me
            </Button>
          </div>
        </StyledForm>
      </Formik>
    </EntryFormStyled>
  );
}

export default Login;
