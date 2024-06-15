import { PropsWithChildren } from "react";
import { TooltipProps } from "./type";
import cn from "@/app/utils/cn";

const Tooltip = ({
  content,
  children,
  className,
  direction = "top",
}: PropsWithChildren<TooltipProps>) => {
  return (
    <div
      className={cn("tooltip", "tooltip-" + direction, className)}
      data-tip={content}
    >
      {children}
    </div>
  );
};

export default Tooltip;
