import { Dispatch, SetStateAction } from "react";

export type TTheme = "light" | "dark";

export type TThemeContext = {
  currentTheme: TTheme;
  setTheme: Dispatch<SetStateAction<TTheme>>;
};
