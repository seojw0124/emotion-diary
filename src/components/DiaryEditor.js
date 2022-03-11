import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button/Button";
import Header from "./Header/Header";
import EmotionItem from "./EmotionItem";
import { emotionList } from "../api/EmotionList/emotionList";

import emotion1 from "../Images/emotion1.png";
import emotion2 from "../Images/emotion2.png";
import emotion3 from "../Images/emotion3.png";
import emotion4 from "../Images/emotion4.png";
import emotion5 from "../Images/emotion5.png";

import { DiaryDispatchContext } from "../App";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  const navigate = useNavigate();

  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");

  const { onCreate } = useContext(DiaryDispatchContext);

  const handleClickEmotion = (emotion) => {
    setEmotion(emotion);
  };

  const contentRef = useRef();

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    onCreate(date, content, emotion);
    navigate("/", { replace: true });
  };

  return (
    <div className="DiaryEditor">
      <Header
        headText={"새 일기쓰기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => navigate(-1)} />}
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it, id) => (
              <EmotionItem
                key={id}
                {...it}
                onClick={handleClickEmotion}
                isSelected={it.id === emotion}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="오늘은 어땠나요"
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <Button text={"취소하기"} onClick={() => navigate(-1)} />
            <Button
              text={"작성완료"}
              type={"positive"}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
