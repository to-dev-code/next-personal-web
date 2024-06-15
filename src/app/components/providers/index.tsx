import { PropsWithChildren } from "react";
import ToastProvider from "./toast-provider";

const AppProviders = ({ children }: PropsWithChildren) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export default AppProviders;
