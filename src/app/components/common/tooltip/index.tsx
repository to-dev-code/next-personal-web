import { PropsWithChildren } from "react";
import { TooltipProps } from "./type";
import cn from "@/app/utils/cn";

const Tooltip = ({
  content,
  children,
  className,
  direction = "top",
}: PropsWithChildren<TooltipProps>) => {
  const tooltipClass = (() => {
    switch (direction) {
      case "top":
        return "tooltip-top";
      case "bottom":
        return "tooltip-bottom";
      case "left":
        return "tooltip-left";
      case "right":
        return "tooltip-right";
    }
  })();
  return (
    <div className={cn("tooltip", tooltipClass, className)} data-tip={content}>
      {children}
    </div>
  );
};

export default Tooltip;
