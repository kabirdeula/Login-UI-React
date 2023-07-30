/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const UiHomeIndicator = ({ className, homeIndicatorClassName }) => {
  return (
    <div className={`UI-home-indicator ${className}`}>
      <div className={`home-indicator ${homeIndicatorClassName}`} />
    </div>
  );
};
