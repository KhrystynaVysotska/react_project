import React from "react";
import styled from "styled-components";
import { fontSize } from "../constants/Constants.js";

const FormButtonsStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: ${fontSize.fs60};
`;

export default FormButtonsStyled;
