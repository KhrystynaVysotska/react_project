import React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import { fontSize } from "../constants/Constants";

const TableStyled = styled(Table)`
  margin-top: 30px;
  td {
    font-family: "Poppins";
    color: #555;
    line-height: 1.6;
  }
  th {
    font-family: "Poppins";
    font-weight: bold;
    font-size: 14px;
    color: #555;
    text-transform: uppercase;
  }
  .column-1 {
    img {
      width: 100px;
      height: 100px;
    }
  }
  .column-2 {
    font-size: ${fontSize.fs16};
  }
  .column-3,
  .column-5 {
    font-size: 18px;
  }
`;

export default TableStyled;
