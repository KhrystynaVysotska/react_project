import styled from "styled-components";
import { fontSize } from "../constants/Constants.js";

const StyledFormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${fontSize.fs12} ${fontSize.fs72};
  .title {
    font-size: ${fontSize.fs28};
    color: #282828;
  }
`;

export default StyledFormContent;
