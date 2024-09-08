import { ButtonProps } from "./type";
import cn from "@/app/utils/cn";

const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn("btn bg-primary hover:opacity-75 hover:bg-primary text-white border-none px-8", props.className)}
    />
  );
};

export default Button;
