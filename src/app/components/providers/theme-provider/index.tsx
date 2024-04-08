"use client";
import type { TTheme, TThemeContext } from "./type";
import { PropsWithChildren, useContext, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext<TThemeContext>({
  currentTheme: "light",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<TTheme>("light");

  // TODO: Implement a logic with HTML DOM.

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
