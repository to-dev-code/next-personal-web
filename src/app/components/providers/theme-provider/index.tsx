"use client";
import { createContext, PropsWithChildren, useState } from "react";
import { Theme, ThemeContextValue } from "./type";

export const ThemeContext = createContext<ThemeContextValue>({
  toggleTheme: () => {},
  currentTheme: "dark",
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme: () => {
          setTheme((currentTheme) => {
            return currentTheme === "dark" ? "light" : "dark";
          });
        },
        currentTheme: theme,
      }}
    >
      <main className="h-screen flex flex-col" data-theme={theme}>
        {children}
      </main>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
