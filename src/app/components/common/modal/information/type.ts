import { ReactNode } from "react";

export type InformationModalProps = {
    content: ReactNode;
    onOk: () => void;
  };