import styled, { css } from "styled-components";

export const EmotionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 18px;
  & img {
    width: 50%;
    margin-bottom: 10px;
  }
  ${(props) =>
    !props.isSelected
      ? css`
          background: #ececec;
        `
      : props.id === 1
      ? css`
          background: #64c964;
          color: white;
        `
      : props.id === 2
      ? css`
          background: #9dd772;
          color: white;
        `
      : props.id === 3
      ? css`
          background: #fdce17;
          color: white;
        `
      : props.id === 4
      ? css`
          background: #fd8446;
          color: white;
        `
      : css`
          background: #fd565f;
          color: white;
        `}
`;
