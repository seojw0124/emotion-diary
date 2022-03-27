import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../../App";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { getStringDate } from "../../util/date";
import { emotionList } from "../../api/EmotionList/emotionList";

const DiaryDetail = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감성 일기장 - ${id}번 일기`;
  });

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setDetailData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!detailData) {
    return <div className="DiaryDetail">로딩중입니다...</div>;
  } else {
    const detailEmotionData = emotionList.find(
      (it) => parseInt(it.id) === parseInt(detailData.emotion)
    );
    console.log(detailEmotionData);

    return (
      <div className="DiaryDetail">
        <Header
          headText={`${getStringDate(new Date(detailData.date))} 기록`}
          leftChild={<Button text={"<뒤로가기"} onClick={() => navigate(-1)} />}
          rightChild={
            <Button
              text={"수정하기"}
              onClick={() => navigate(`/edit/${detailData.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${detailData.emotion}`,
              ].join(" ")}
            >
              <img src={detailEmotionData.emotion_img} />
              <div className="emotion_descript">
                {detailEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{detailData.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default DiaryDetail;
