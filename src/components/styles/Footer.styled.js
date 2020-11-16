import React from "react";
import styled from "styled-components";
import { fontSize, colors } from "../constants/Constants.js";

const Container = styled.footer`
  background-color: ${colors.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  .description {
    margin-top: 35px;
    color: ${colors.grey};
    max-width: 33%;
    text-align: center;
  }
  .copyright {
    color: ${colors.lightgrey};
  }
  .icons {
    padding: 28px 0;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export default Container;
