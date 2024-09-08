import { PropsWithChildren } from "react";
import ToastProvider from "./toast-provider";
import ModalProvider from "./modal-provider";
import ThemeProvider from "./theme-provider";

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <ModalProvider>{children}</ModalProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
