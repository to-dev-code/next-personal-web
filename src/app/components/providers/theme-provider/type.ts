export type Theme = "light" | "dark";

export type ThemeContextValue = {
  toggleTheme: () => void;
  currentTheme: Theme
};
