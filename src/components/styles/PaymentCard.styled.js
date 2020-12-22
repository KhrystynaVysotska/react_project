import React from "react";
import styled from "styled-components";
import { fontSize, colors } from "../constants/Constants.js";

const PaymentCardStyled = styled.div`
  width: 40%;
  height: 40%;
  min-width: 255px;
  border-radius: 8px;
  border: 1px solid #c7c7c7;
  padding: 10px 20px;
  .info {
    display: flex;
    align-items: center;
    .title {
      font-size: ${fontSize.fs20};
      line-height: 1.466667;
      font-weight: lighter;
    }
    .icons {
      margin-left: auto;
      margin-right: 25px;
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        padding-right: 3px;
      }
    }
  }
  .description {
    color: ${colors.lightgrey};
    line-height: 1.6;
    font-size: ${fontSize.fs16};
    padding: 0 25px;
  }
`;

export default PaymentCardStyled;
