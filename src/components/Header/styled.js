import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e2e2;
  & div {
    display: flex;
  }
`;
export const HeaderText = styled.div`
  width: 50%;
  font-size: 25px;
  justify-content: center;
`;
export const HeaderBtnLeft = styled.div`
  width: 25%;
  justify-content: start;
`;
export const HeaderBtnRight = styled.div`
  width: 25%;
  justify-content: end;
`;
