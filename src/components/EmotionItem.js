const EmotionItem = ({
  id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`,
      ].join(" ")}
      onClick={() => onClick(id)}
    >
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </div>
  );
};

export default EmotionItem;
