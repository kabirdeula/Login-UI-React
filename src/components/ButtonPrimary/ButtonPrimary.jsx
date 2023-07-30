/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonPrimary = ({ className, text = "GET STARTED" }) => {
  return (
    <div className={`button-primary ${className}`}>
      <div className="get-started">{text}</div>
    </div>
  );
};

ButtonPrimary.propTypes = {
  text: PropTypes.string,
};
