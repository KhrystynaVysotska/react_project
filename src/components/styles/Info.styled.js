import styled from "styled-components";
import { colors, fontSize } from "../constants/Constants";

const InfoStyled = styled.div`
  h1 {
    color: ${colors.grey}
    font-family: "Poppins";
    font-size: ${fontSize.fs32};
    line-height: 1.5;
    padding-bottom: ${fontSize.fs8};
  }
  h3 {
    font-family: "Poppins";
    font-size: ${fontSize.fs20};
    line-height: 1.4;
  }
  p {
    font-family: "Poppins";
    font-size: 17px;
    line-height: 2;
    color: ${colors.lightgrey}
  }
`;

export default InfoStyled;
