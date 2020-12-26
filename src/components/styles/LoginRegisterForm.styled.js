import React from "react";
import styled from "styled-components";
import { Form } from "formik";
import { fontSize, colors } from "../constants/Constants";

const StyledForm = styled(Form)`
  display: flex;
  width: 920px;
  height: 520px;
  background-color: rgba(255, 255, 255, 0.63);
  border-radius: 8px;
  position: relative;
  box-shadow: 2px 1px 15px 2px #00000033;
  img {
    width: 50%;
    height: 100%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .form {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .registration_fields,
  .login_fields {
    display: flex;
    flex-direction: column;
    margin: 2px;
    justify-content: space-between;
    height: 45%;
  }
  .login_fields {
    height: 25%;
  }
  .sign_up_title,
  .sign_in_title {
    font-size: ${fontSize.fs32};
    font-weight: lighter;
    color: ${colors.dark};
    padding-top: 23px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #e4ecf4 inset !important;
  }

  .is_member,
  .not_a_member {
    font-size: 14px;
    font-weight: lighter;
    color: ${colors.dark};
    margin: 20px 0 30px;
    a {
      text-decoration: none;
      color: rgb(72 110 163);
    }
  }
`;

export default StyledForm;
