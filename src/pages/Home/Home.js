import { useContext, useEffect, useState } from "react";

import { DiaryStateContext } from "../../App";

import Header from "../../components/Header/Header";
import StyledButton from "../../components/Button/Button";
import DiaryList from "../../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const headText = `${currentDate.getFullYear()}년 ${
    currentDate.getMonth() + 1
  }월`;

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      ).getTime();

      const lastDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(
        diaryList.filter((it) => firstDate <= it.date && it.date <= lastDate)
      );
    }
  }, [diaryList, currentDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const decreaseMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        currentDate.getDate()
      )
    );
  };
  const increaseMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      )
    );
  };

  return (
    <div>
      <Header
        headText={headText}
        leftChild={<StyledButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<StyledButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
      {/* 위에 Header에서 decreaseMonth 라는 상태
      변화 함수 때문에 Home 컴포넌트의 state가 변함. -> 자식 컴포넌트인 DiaryList도 랜더링됨.*/}
    </div>
  );
};

export default Home;
