import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { colors } from "../constants/Constants";

const CustomizedCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 13%;
  top: 3%;
  cursor: pointer;
  color: ${colors.lowopacitygrey};
`;

export default CustomizedCloseIcon;
