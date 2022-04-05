import styled, { css } from "styled-components";

export const DiaryItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e2e2e2;
`;
export const EmotionImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  min-width: 120px;
  height: 80px;
  border-radius: 5px;
  & img {
    width: 60%;
  }
  ${(props) =>
    props.emotion === 1
      ? css`
          background: #64c964;
        `
      : props.emotion === 2
      ? css`
          background: #9dd772;
        `
      : props.emotion === 3
      ? css`
          background: #fdce17;
        `
      : props.emotion === 4
      ? css`
          background: #fd8446;
        `
      : css`
          background: #fd565f;
        `}
`;
export const DiarySimpleInformation = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  cursor: pointer;
`;
export const DiaryDate = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 5px;
`;
export const DiaryContentPreview = styled.div`
  font-size: 18px;
`;
export const DiaryEditButtonWrapper = styled.div`
  min-width: 70px;
`;
