import React from "react";
import styled from "styled-components";
import { colors } from "../constants/Constants.js";
const MenuStyled = styled.nav`
  ul {
    display: flex;
    align-items: center;
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 0px 30px 0px 30px;
  }
  a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    font-family: inherit;
  }
  .active {
    color: ${colors.primary};
  }
`;

export default MenuStyled;
