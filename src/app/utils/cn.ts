import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

export default cn;
