import React from "react";
import styled from "styled-components";
import { fontSize, colors } from "../constants/Constants.js";

const HomeStyled = styled.div`
  .product_overview h1 {
    font-family: "Poppins";
    font-size: ${fontSize.fs36};
    line-height: 1.1;
    text-transform: uppercase;
  }
  .product_overview li:first-child {
    padding-left: 0;
  }
  .product_overview a {
    cursor: pointer;
  }
  .product_overview a:hover,
  .active {
    color: ${colors.primary};
  }
  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .buttons {
    display: flex;
  }
  .buttons button {
    margin-left: 15px;
  }
  .cards {
    padding-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .load_more {
    margin-top: 70px;
    width: 100%;
    text-align: center;
  }
`;

export default HomeStyled;
