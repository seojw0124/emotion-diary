import { useNavigate } from "react-router-dom";

import Button from "./Button/Button";

import emotion1 from "../Images/emotion1.png";
import emotion2 from "../Images/emotion2.png";
import emotion3 from "../Images/emotion3.png";
import emotion4 from "../Images/emotion4.png";
import emotion5 from "../Images/emotion5.png";
import { getStringDate } from "../util/date";

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

  const strDate = getStringDate(new Date(parseInt(date)));

  return (
    <div className="DiaryItem">
      <div
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        {EmotionImg(emotion)}
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <Button onClick={goEdit} text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
