import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  white-space: nowrap;
  font-family: "Nanum Pen Script";
  ${(props) =>
    props.btnType === "positive"
      ? css`
          background: #64c964;
          color: white;
        `
      : props.btnType === "negative"
      ? css`
          background: #fd565f;
          color: white;
        `
      : css`
          background: #ececec;
          color: black;
        `}
`;
