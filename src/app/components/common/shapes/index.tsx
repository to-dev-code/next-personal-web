import { TShapeCommonProps } from "./type";
import cn from "@/app/utils/cn";

export const Circle = ({ className }: TShapeCommonProps) => {
  return (
    <div className={cn("rounded-full w-12 h-12 bg-secondary", className)}></div>
  );
};

export const Rectangle = ({ className }: TShapeCommonProps) => {
  return (
    <div className={cn("rounded-xl w-12 h-12 bg-secondary", className)}></div>
  );
};
