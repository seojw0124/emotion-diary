import React from "react";
import { StyledButton } from "./styled";

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <>
      <StyledButton btnType={btnType} onClick={onClick}>
        {text}
      </StyledButton>
    </>
  );
};

Button.defaultProps = {
  type: "default",
};

export default React.memo(Button);
