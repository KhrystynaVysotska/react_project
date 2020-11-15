import React from "react";
import styled from "styled-components";
import { fontSize, colors } from "../constants/Constants.js";

const NavigationStyled = styled.header`
  display: flex;
  position: fixed;
  z-index: 1000;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: ${fontSize.fs84};
  background-color: transparent;
  transition: height 0.3s, background-color 0.3s;
  ${({ scrolled }) =>
    scrolled &&
    `
    background-color: ${colors.white};
  `}
`;

export default NavigationStyled;
