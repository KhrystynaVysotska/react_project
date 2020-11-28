import styled from "styled-components";
import { fontSize, colors } from "../constants/Constants.js";

const SweaterCardStyled = styled.nav`
  .card {
    width: ${fontSize.fs296};
    background-color: ${colors.card};
    margin-bottom: ${fontSize.fs48};
  }
  .media {
    height: ${fontSize.fs296};
  }
  .brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.lightgrey};
    h1 {
      font-size: ${fontSize.fs24};
      font-family: "Popins";
      line-height: 1.466667;
      font-weight: lighter;
    }
  }
  .size {
    p {
      margin: 5px 0;
    }
    color: ${colors.grey};
    line-height: 1.6;
    font-size: ${fontSize.fs16};
  }
  .price {
    p {
      margin: 5px 0;
    }
    color: ${colors.grey};
    line-height: 1.466667;
    font-weight: bold;
    font-size: ${fontSize.fs16};
  }
  .description {
    p {
      margin: 5px 0;
    }
    color: ${colors.grey};
    line-height: 1.6;
    font-size: ${fontSize.fs16};
  }
  .value {
    padding-left: 13px;
  }
  .card_content {
    padding: 0 15px;
  }
  .view_button {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export default SweaterCardStyled;
