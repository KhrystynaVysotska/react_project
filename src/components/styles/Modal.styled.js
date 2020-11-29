import styled from "styled-components";
import { colors, fontSize } from "../constants/Constants";

const ModalStyled = styled.div`
  position: absolute;
  left: 13%;
  right: 13%;
  top: 8%;
  bottom: 5%;
  display: flex;
  background: ${colors.white};
  padding: ${fontSize.fs28} ${fontSize.fs72};
`;

export default ModalStyled;
