import React from "react";

import { EmotionItemWrapper } from "./styled";

const EmotionItem = ({
  id,
  emotion_img,
  emotion_descript,
  onClick, // useState를 이용해서 전달받은 상태변화 함수가 아니거나,
  // useCallback으로 묶어놓은 함수가 아니라면 기본적으로 컴포넌트가 렌더링될 때 다시 생성됨.
  isSelected,
}) => {
  return (
    <>
      <EmotionItemWrapper
        isSelected={isSelected}
        id={id}
        onClick={() => onClick(id)}
      >
        <img src={emotion_img} />
        <span>{emotion_descript}</span>
      </EmotionItemWrapper>
    </>
  );
};

export default React.memo(EmotionItem); // onClick 때문에 이것만으론 최적화가 안 됨.
