/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const UiStatusBars = ({
  className,
  battery = "https://generation-sessions.s3.amazonaws.com/8aedbda75596962a401644e0d770ae79/img/battery@2x.png",
  wifi = "https://generation-sessions.s3.amazonaws.com/8aedbda75596962a401644e0d770ae79/img/wifi-1.svg",
  mobileSignal = "https://generation-sessions.s3.amazonaws.com/8aedbda75596962a401644e0d770ae79/img/mobile-signal-1.svg",
  elementClassName,
}) => {
  return (
    <div className={`UI-status-bars ${className}`}>
      <img className="battery" alt="Battery" src={battery} />
      <img className="wifi" alt="Wifi" src={wifi} />
      <img className="mobile-signal" alt="Mobile signal" src={mobileSignal} />
      <div className="time-style">
        <div className={`element ${elementClassName}`}>9:41</div>
      </div>
    </div>
  );
};

UiStatusBars.propTypes = {
  battery: PropTypes.string,
  wifi: PropTypes.string,
  mobileSignal: PropTypes.string,
};
