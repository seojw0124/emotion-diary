import styled, { css } from "styled-components";

export const DiaryEditorWrapper = styled.div`
  & section {
    margin-bottom: 40px;
  }
  & h4 {
    font-size: 21px;
    font-weight: bold;
  }
`;
export const DiaryEditorInner = styled.div``;
export const DiaryTodayDateWrapper = styled.div``;
export const DiaryTodayDate = styled.input`
  border: none;
  border-radius: 5px;
  background: #ececec;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Nanum Pen Script";
  font-size: 20px;
`;
export const EmotionListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2%;
`;
export const DiaryContentWrapper = styled.div``;
export const DiaryContent = styled.textarea`
  font-family: "Nanum Pen Script";
  font-size: 20px;
  box-sizing: border-box;
  width: 100%;
  min-height: 200px;
  resize: vertical; /* 위아래로만 사이즈 조절 가능 */
  border: none;
  border-radius: 5px;
  background: #ececec;
  padding: 20px;
`;
export const BottomButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
