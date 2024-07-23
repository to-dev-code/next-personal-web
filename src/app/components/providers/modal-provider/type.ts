import { ReactNode } from "react";

export type ConfirmModalResult = "yes" | "no";
export type InfoModalResult = "ok";

export type ModalContextType = {
  onConfirmModal: (content: ReactNode) => Promise<ConfirmModalResult>;
  onInformationModal: (content: ReactNode) => Promise<InfoModalResult>;
};
