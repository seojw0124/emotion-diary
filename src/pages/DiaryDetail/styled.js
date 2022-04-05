import styled, { css } from "styled-components";

export const DiaryDetailWrapper = styled.div`
  & section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-bottom: 100px;
  }
  & h4 {
    font-size: 22px;
    font-weight: bold;
  }
`;
export const EmotionWrapper = styled.div`
  background: #ececec;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  ${(props) =>
    !props.detailEmotion
      ? css`
          background: #ececec;
        `
      : props.detailEmotion === 1
      ? css`
          background: #64c964;
        `
      : props.detailEmotion === 2
      ? css`
          background: #9dd772;
        `
      : props.detailEmotion === 3
      ? css`
          background: #fdce17;
        `
      : props.detailEmotion === 4
      ? css`
          background: #fd8446;
        `
      : css`
          background: #fd565f;
        `}
`;
export const EmotionDescript = styled.div`
  font-size: 25px;
  color: white;
`;
export const DetailContentWrapper = styled.div`
  width: 100%;
  background: #ececec;
  border-radius: 5px;
  word-break: keep-all;
  overflow-wrap: break-word;
  & p {
    padding: 20px;
    text-align: left;
    font-size: 20px;
    font-family: "Yeon Sung";
    font-weight: 400;
    line-height: 2.5;
  }
`;
