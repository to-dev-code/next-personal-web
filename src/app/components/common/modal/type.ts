import { ReactNode } from "react";

export type ModalProps = {
  id: string;
  title?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  className?: string;
};
