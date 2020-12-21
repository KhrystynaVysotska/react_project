import styled from "styled-components";
import { colors, fontSize } from "../constants/Constants";

const ModalSuccessStyled = styled.div`
  position: absolute;
  left: 30%;
  right: 30%;
  top: 25%;
  bottom: 25%;
  display: flex;
  background: ${colors.white};
  padding: ${fontSize.fs28} ${fontSize.fs72};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-family: "Poppins";
    font-weight: bold;
    color: #333333;
    font-size: 18px;
    line-height: 1.5;
    padding: 0 15px;
  }
  img {
    width: 98px;
    height: 98px;
  }
`;

export default ModalSuccessStyled;
