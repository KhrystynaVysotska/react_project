import React from "react";
import styled from "styled-components";
import { fontSize } from "../constants/Constants.js";

const StyledFormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${fontSize.fs28} ${fontSize.fs72};
  .title {
    font-family: "Poppins";
    font-size: ${fontSize.fs28};
    color: #282828;
  }
`;

export default StyledFormContent;
