import { PropsWithChildren } from "react";
import ThemeProvider from "./theme-provider";
import MenuProvider from "./menu-provider";

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <MenuProvider>{children}</MenuProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
