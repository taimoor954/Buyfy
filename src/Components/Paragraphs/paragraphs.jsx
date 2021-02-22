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
  var fontSizeValue = fontSize/10 //to converti into em

  return (
    <div>
      <h1
        className="Paragraph"
        style={{
          fontSize: `${fontSizeValue}em`,
          fontWeight: fontWeightValue,
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
