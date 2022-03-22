import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button/Button";
import Header from "./Header/Header";
import EmotionItem from "./EmotionItem";
import { emotionList } from "../api/EmotionList/emotionList";
import { getStringDate } from "../util/date";

import { DiaryDispatchContext } from "../App";

const DiaryEditor = ({ isEdit, originData }) => {
  const navigate = useNavigate();

  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");

  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);
  const contentRef = useRef();

  const handleClickEmotion = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, []);

  const handleSubmit = useCallback(() => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      !isEdit
        ? onCreate(date, content, emotion)
        : onEdit(originData.id, date, content, emotion);
    }

    navigate("/", { replace: true });
  }, [content.length]);

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  const handleRemove = useCallback(() => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(originData.id);
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="DiaryEditor">
      <Header
        headText={isEdit ? "일기 수정하기" : "새 일기쓰기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={handleGoBack} />}
        rightChild={
          isEdit && (
            <Button text="삭제하기" type={"negative"} onClick={handleRemove} />
          )
        }
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
            {emotionList.map((it) => (
              <EmotionItem
                key={it.id}
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
            <Button text={"취소하기"} onClick={handleGoBack} />
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
