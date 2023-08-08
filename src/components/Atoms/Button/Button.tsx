import React from "react";

// STYLES
import { ButtonContainer } from "./ButtonStyle";

// MISC
import { ButtonProps } from "./ButtonModel";

const Button = (props: ButtonProps) => {
  // PROPS
  const { text, onClick } = props;

  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
};

export default Button;
