import styled, { keyframes } from "styled-components";
import { fontSize, colors } from "../constants/Constants.js";

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
  `;
const MainSliderStyled = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  .hero-section {
    left: 15%;
    z-index: 1000;
    position: absolute;
    top: 40%;
  }
  .title {
    font-size: ${fontSize.fs28};
    color: ${colors.lightgrey};
    font-family: "Poppins", sans-serif;
    font-weight: lighter;
    line-height: 1.2857px;
    animation: ${fadeInDown} 2s linear;
  }
  .description {
    font-size: ${fontSize.fs60};
    text-transform: uppercase;
    line-height: 1.1px;
    color: ${colors.grey};
    font-family: "Playfair Display", serif;
    padding-bottom: 25px;
    animation: ${fadeInDown} 2s linear;
  }
`;

export default MainSliderStyled;
