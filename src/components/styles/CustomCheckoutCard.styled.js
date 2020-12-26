import styled from "styled-components";
import { fontSize, colors } from "../constants/Constants.js";

const CustomCheckoutCardStyled = styled.div`
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
    .price {
      margin-left: auto;
      margin-right: 25px;
      color: ${colors.grey};
      line-height: 1.466667;
      font-weight: bold;
      font-size: 18px;
    }
  }
  .description {
    color: ${colors.lightgrey};
    line-height: 1.6;
    font-size: ${fontSize.fs16};
    padding: 0 25px;
  }
`;

export default CustomCheckoutCardStyled;
