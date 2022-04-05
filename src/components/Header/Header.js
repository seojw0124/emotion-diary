import React from "react";
import {
  StyledHeader,
  HeaderText,
  HeaderBtnLeft,
  HeaderBtnRight,
} from "./styled";

const Header = ({ headText, leftChild, rightChild }) => {
  return (
    <StyledHeader>
      <HeaderBtnLeft>{leftChild}</HeaderBtnLeft>
      <HeaderText>{headText}</HeaderText>
      <HeaderBtnRight>{rightChild}</HeaderBtnRight>
    </StyledHeader>
  );
};

export default React.memo(Header);
