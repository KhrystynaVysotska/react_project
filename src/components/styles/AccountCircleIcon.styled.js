import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { colors } from "../constants/Constants";

const AccountCircleIconStyled = styled(AccountCircleIcon)`
  color: ${colors.darkprimary};
  position: absolute;
  top: -45px;
`;

export default AccountCircleIconStyled;
