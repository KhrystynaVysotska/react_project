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
      font-family: "Popins";
      line-height: 1.466667;
      font-weight: lighter;
    }
  }
  .feature {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${colors.grey};
    line-height: 1.6;
  }
  .price {
    color: ${colors.grey};
    letter-spacing: 1px;
    line-height: 1.466667;
    font-weight: bold;
    span {
      padding-left: 13px;
    }
  }
`;

export default SweaterCardStyled;
