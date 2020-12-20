import React from "react";
import styled from "styled-components";
import { Form } from "formik";
import { fontSize } from "../constants/Constants";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding-top: ${fontSize.fs28};
  .name,
  .personal_data {
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding-bottom: ${fontSize.fs28};
  }
`;

export default StyledForm;
