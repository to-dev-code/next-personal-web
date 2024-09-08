"use client";
import { useTheme } from "./hooks";
import cn from "./utils/cn";

export default function Home() {
  const { currentTheme } = useTheme();
  const isThemeDark = currentTheme === "dark";

  return (
    <div className="px-8 pt-8 flex flex-col gap-y-6 h-full">
      <div
        className={cn(
          "text-5xl",
          isThemeDark ? "text-green-300" : "text-black"
        )}
      >
        {"‘Hi, I'm Sophon.I’;"}
      </div>
      <div className="text-2xl">
        <span className={cn(isThemeDark ? "text-red-400" : "text-black")}>
          {"import "}
        </span>
        <span className={cn(isThemeDark ? "text-blue-300" : "text-black")}>
          {"{"}
        </span>
        <span className={cn(isThemeDark ? "text-base-content" : "text-black")}>
          {" front-end, back-end "}
        </span>
        <span className={cn(isThemeDark ? "text-blue-300" : "text-black")}>
          {"} "}
        </span>
        <span className={cn(isThemeDark ? "text-red-400" : "text-black")}>
          {"from "}
        </span>
        <span className={cn(isThemeDark ? "text-blue-300" : "text-black")}>
          {"'software-engineer'"}
        </span>
        <span>{";"}</span>
      </div>
      <div className="text-md">
        <span className={cn(isThemeDark ? "text-red-400" : "text-black")}>
          {"const "}
        </span>
        <span className={cn(isThemeDark ? "text-blue-300" : "text-black")}>
          {"lover "}
        </span>
        <span className={cn(isThemeDark ? "text-red-400" : "text-black")}>
          {"= "}
        </span>
        <span className={cn(isThemeDark ? "text-green-300" : "text-black")}>
          {
            "'I love coding to make a thing that has the best design, best pattern, and best performance, all merging to be the best software.'"
          }
        </span>
        <span>{";"}</span>
      </div>
      <div className="text-md">
        <span className={cn(isThemeDark ? "text-red-400" : "text-black")}>
          {"export "}
        </span>
        <span className={cn(isThemeDark ? "text-red-400" : "text-black")}>
          {"default "}
        </span>
        <span className={cn(isThemeDark ? "text-blue-300" : "text-black")}>
          {"lover"}
        </span>
        <span>{";"}</span>
      </div>
    </div>
  );
}
