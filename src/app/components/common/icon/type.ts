import { MouseEventHandler } from "react";

export type TIconProps = {
  name: "file" | "close" | "info";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>
};
