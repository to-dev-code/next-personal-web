import { ReactNode } from "react";

export type ConfirmationModalProps = {
  content: ReactNode;
  onYes: () => void;
  onNo: () => void;
};
