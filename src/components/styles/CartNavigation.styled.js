import styled from "styled-components";
import { fontSize, colors } from "../constants/Constants.js";

const CartNavigationStyled = styled.div`
  margin-top: ${fontSize.fs72};
  width: 11%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .back_page,
  .pointer,
  .current_page {
    text-decoration: none;
    font-family: "Poppins";
    font-size: 14px;
    color: #282828;
  }
  .current_page {
    color: #929191;
  }
  .back_page:hover {
    color: ${colors.primary};
  }
`;

export default CartNavigationStyled;
