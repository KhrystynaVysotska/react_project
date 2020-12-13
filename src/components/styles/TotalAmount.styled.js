import styled from "styled-components";

const TotalAmountStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: #333;
  font-family: "Poppins";
  font-size: 18px;
  .label {
    font-weight: bold;
    margin-right: 45px;
  }
  .amount {
    margin-right: 15px;
  }
`;

export default TotalAmountStyled;
