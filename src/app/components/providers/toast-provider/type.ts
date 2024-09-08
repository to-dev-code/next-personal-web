import { ReactNode } from "react";

export type ToastType = "info" | "success" | "error";

export type ToastState = {
  type: ToastType;
  content: ReactNode;
};

export type ToastContextValue = {
  showToast: (state: ToastState) => void;
};
