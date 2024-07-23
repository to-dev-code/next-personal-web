import { MouseEventHandler } from "react";

type IconName =
  | "sun"
  | "moon"
  | "info"
  | "file"
  | "cross"
  | "email"
  | "user"
  | "facebook"
  | "linkedin"
  | "instagram"
  | "line"
  | "th-flag"
  | "phone-call"
  | "attacht-file"
  | "circle-checked"
  | "circle-cross";

export type IconProps = {
  name: IconName;
  className?: string;
  classNameSvg?: string;
  width?: string | number;
  height?: string | number;
  fillColor?: string;
  strokeColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
