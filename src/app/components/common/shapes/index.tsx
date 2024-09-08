import cn from "@/app/utils/cn";

export const Circle = ({ className }: ShapeCommonProps) => {
  return (
    <div className={cn("rounded-full w-12 h-12 bg-base-100", className)}></div>
  );
};

export const Rectangle = ({ className }: ShapeCommonProps) => {
  return (
    <div className={cn("rounded-xl w-12 h-12 bg-base-100", className)}></div>
  );
};
