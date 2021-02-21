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
  AdditionalStyle = {},
  color = 'black'
}) => {
  var fontWeightValue = fontEstimater(fontWeight);
  return (
    <div>
      <h1
        className="header"
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: fontWeight,
          ...AdditionalStyle,
            color:color
        }}
       >
           {/* // Our so called reusable conponenet */}
        {children}
      </h1>
    </div>
  );
};

export default Header;
