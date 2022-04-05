import React from "react";
import { useNavigate } from "react-router-dom";

import {
  DiaryItemWrapper,
  EmotionImgWrapper,
  DiarySimpleInformation,
  DiaryDate,
  DiaryContentPreview,
  DiaryEditButtonWrapper,
} from "./styled";
import Button from "../Button/Button";

import emotion1 from "../../Images/emotion1.png";
import emotion2 from "../../Images/emotion2.png";
import emotion3 from "../../Images/emotion3.png";
import emotion4 from "../../Images/emotion4.png";
import emotion5 from "../../Images/emotion5.png";

const EmotionImg = (emotion) => {
  switch (emotion) {
    case 1: {
      return <img src={emotion1} />;
    }
    case 2: {
      return <img src={emotion2} />;
    }
    case 3: {
      return <img src={emotion3} />;
    }
    case 4: {
      return <img src={emotion4} />;
    }
    case 5: {
      return <img src={emotion5} />;
    }
  }
};

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  return (
    <DiaryItemWrapper>
      <EmotionImgWrapper emotion={emotion}>
        {EmotionImg(emotion)}
      </EmotionImgWrapper>
      <DiarySimpleInformation onClick={goDetail}>
        <DiaryDate>{strDate}</DiaryDate>
        <DiaryContentPreview>{content.slice(0, 25)}</DiaryContentPreview>
      </DiarySimpleInformation>
      <DiaryEditButtonWrapper>
        <Button onClick={goEdit} text={"수정하기"} />
      </DiaryEditButtonWrapper>
    </DiaryItemWrapper>
  );
};

export default React.memo(DiaryItem);
