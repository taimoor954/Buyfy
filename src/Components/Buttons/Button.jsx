import React from "react";
import "./Button.css";
import Paragraph from './../Paragraphs/paragraphs';
const Button = ({
  children,
  background = "purple",
  border,
  additionalStyle = {},
  height = `10px`,
  width = `15px`,
  color = "black",
  fontSize,
  fontWeight,
  ...restProps
}) => {
  return (
    <button
      className="button"
      {...restProps}
      style={{
        background: background,
        color: color,
        border: border,
        height: `${height}rem`,
        width: `${width}rem`,
        ...additionalStyle
      }}
    >
        <Paragraph fontSize={fontSize} fontWeight={fontWeight}  color={color}>{children}</Paragraph>
    </button>
  );
};

export default Button;
