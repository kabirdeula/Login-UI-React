import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ElementTextFieldMedium } from "../../components/ElementTextFieldMedium";
import { UiHomeIndicator } from "../../components/UiHomeIndicator";
import { UiStatusBars } from "../../components/UiStatusBars";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div">
        <h1 className="text-wrapper">Welcome Back !</h1>
        <p className="log-in-to-your">
          Log in to your account &amp; manage <br />
          your password
        </p>
        <div className="text-wrapper-2">Forgot Password ?</div>
        <div className="frame">
          <p className="p">Don’t have an account ?</p>
          <div className="text-wrapper-3">Create an account.</div>
        </div>
        <ButtonPrimary className="button-primary-instance" text="LOGIN" />
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img
              className="img"
              alt="Trailing icon"
              src="https://generation-sessions.s3.amazonaws.com/8aedbda75596962a401644e0d770ae79/img/trailing-icon-1@2x.png"
            />
            <div className="data-2">
              <p className="text-2">Enter username or mobile no.</p>
            </div>
          </div>
        </div>
        <ElementTextFieldMedium className="one-text-field-medium-passwrod" hasLabel={false} />
        <UiStatusBars
          battery="https://generation-sessions.s3.amazonaws.com/8aedbda75596962a401644e0d770ae79/img/battery-1@2x.png"
          className="UI-status-bars-instance"
          elementClassName="design-component-instance-node"
          mobileSignal="https://generation-sessions.s3.amazonaws.com/8aedbda75596962a401644e0d770ae79/img/mobile-signal.svg"
          wifi="https://generation-sessions.s3.amazonaws.com/8aedbda75596962a401644e0d770ae79/img/wifi.svg"
        />
        <UiHomeIndicator className="UI-home-indicator-instance" homeIndicatorClassName="UI-home-indicator-2" />
      </div>
    </div>
  );
};
