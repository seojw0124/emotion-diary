import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  DiaryListMenuWrapper,
  DiaryListSortMenu,
  NewDiaryMenu,
} from "./styled";
import Button from "../Button/Button";
import DiaryItem from "../DiaryItem/DiaryItem";

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it) => (
        <option value={it.value} key={it.id}>
          {it.name}
        </option>
      ))}
    </select>
  );
});

const sortOptionList = [
  { value: "lastest", name: "최신 순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부 다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안 좋은 감정만" },
];

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState("lastest");
  const [filter, setFilter] = useState("all");

  /*
  밑에 처럼 따로 함수를 선언하면 렌더링이 됨. 굳이 따로 선언할 필요 없는 경우에는
  상태변화 함수 그 자체를 내려주면 조금 더 편하게 최적화할 수 있음

  const handleSetSortType = (sortType) => {
    setSortType(sortType);
  };
  const handleSetFilter = (filter) => {
    setSortType(filter);
  };
  */

  const getProcessedDiaryList = () => {
    const filterCallback = (item) => {
      if (filter == "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === "lastest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallback(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  };

  return (
    <>
      <DiaryListMenuWrapper>
        <DiaryListSortMenu>
          <ControlMenu
            clossName="ControlMenu"
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </DiaryListSortMenu>
        <NewDiaryMenu>
          <Button
            type={"positive"}
            text={"새 일기쓰기"}
            onClick={() => navigate("/new")}
          />
        </NewDiaryMenu>
      </DiaryListMenuWrapper>
      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </>
  );
};

DiaryList.defaultPorps = {
  diaryList: [],
};

export default DiaryList;
