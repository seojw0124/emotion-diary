import styled from "styled-components";

export const DiaryListMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 30px;
`;
export const DiaryListSortMenu = styled.div`
  display: flex;
  .ControlMenu {
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    background: #ececec;
    padding: 10px 20px;
    cursor: pointer;
    font-family: "Nanum Pen Script";
    font-size: 18px;
  }
`;
export const NewDiaryMenu = styled.div`
  flex-grow: 1;
  & button {
    width: 100%;
  }
`;
