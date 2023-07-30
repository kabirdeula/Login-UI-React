import { UiStatusBars } from ".";

export default {
  title: "Components/UiStatusBars",
  component: UiStatusBars,
};

export const Default = {
  args: {
    className: {},
    battery: "https://generation-sessions.s3.amazonaws.com/8aedbda75596962a401644e0d770ae79/img/battery@2x.png",
    wifi: "https://generation-sessions.s3.amazonaws.com/8aedbda75596962a401644e0d770ae79/img/wifi-1.svg",
    mobileSignal:
      "https://generation-sessions.s3.amazonaws.com/8aedbda75596962a401644e0d770ae79/img/mobile-signal-1.svg",
    elementClassName: {},
  },
};
