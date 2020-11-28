import styled from "styled-components";
import { fontSize, colors } from "../constants/Constants.js";

const ProductOverviewPanelStyled = styled.div`
  padding-top: ${fontSize.fs48};
  h1 {
    font-family: "Poppins";
    font-size: ${fontSize.fs36};
    line-height: 1.1;
    text-transform: uppercase;
  }
  li:first-child {
    padding-left: 0;
  }
  a {
    cursor: pointer;
  }
  a:hover,
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
`;

export default ProductOverviewPanelStyled;
