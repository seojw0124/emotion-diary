const StyledButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["StyledButton", `StyledButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

StyledButton.defaultProps = {
  type: "default",
};

export default StyledButton;
