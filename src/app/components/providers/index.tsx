import { PropsWithChildren } from "react";
import ToastProvider from "./toast-provider";
import ModalProvider from "./modal-provider";

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ToastProvider>
      <ModalProvider>{children}</ModalProvider>
    </ToastProvider>
  );
};

export default AppProviders;
