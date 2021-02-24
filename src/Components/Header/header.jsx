import React from "react";
import "./header.css";

var fontEstimater = (fontWeighStr) => {
  switch (fontWeighStr) {
    case "light":
      return 300;

    case "regular":
      return 400;

    case "semiBold":
      return 500;

    case "bold":
      return 700;

    default:
      return 400;
  }
};

const Header = ({
  children,
  fontSize = 16,
  fontWeight = "bold",
  style = {},
  
  color = "black",
}) => {
  var fontWeightValue = fontEstimater(fontWeight);
  var fontSizeValue = fontSize / 10;
  return (
    //1em = 10px set through below div style
    <div style={{ fontSize: "62.5%" }}>
      <h1
        className="header"
        style={{
          fontSize: `${fontSizeValue}em`,
          fontWeight: fontWeightValue,
          ...style,
          color: color,
        }}
      >
        {/* // Our so called reusable conponenet */}
        {children}
      </h1>
    </div>
  );
};

export default Header;
