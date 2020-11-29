import styled from "styled-components";
import { fontSize } from "../constants/Constants";
import Chip from "@material-ui/core/Chip";

const ChipStyled = styled(Chip)`
  margin-right: ${fontSize.fs12};
`;

export default ChipStyled;
