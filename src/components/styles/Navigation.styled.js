import React from 'react';
import styled from "styled-components";

const NavigationStyled = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 84px;
  background-color: transparent;
  transition: height 0.3s, background-color 0.3s;
`;

export default NavigationStyled;
