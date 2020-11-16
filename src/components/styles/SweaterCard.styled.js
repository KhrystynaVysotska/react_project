import React from "react";
import styled from "styled-components";
import { fontSize, colors } from "../constants/Constants.js";

const SweaterCardStyled = styled.nav`
  .card {
    width: ${fontSize.fs296};
  }
  .media {
    height: ${fontSize.fs296};
  }
  .brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.lowopacitygrey};
    h1 {
      font-size: ${fontSize.fs24};
      font-family: "Popins";
      line-height: 1.466667;
      font-weight: lighter;
    }
  }
  .size {
    color: ${colors.grey};
    line-height: 1.6;
    font-size: ${fontSize.fs16};
  }
  .price {
    color: ${colors.grey};
    line-height: 1.466667;
    font-weight: bold;
    font-size: ${fontSize.fs16};
  }
  span {
    padding-left: 13px;
  }
  .card_content {
    padding: 0 15px;
  }
`;

export default SweaterCardStyled;
