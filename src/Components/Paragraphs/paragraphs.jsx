import React from "react";
import "./paragraph.css";

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

const Paragraph = ({
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
        className="Paragraph"
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

export default Paragraph;
