import { AppContainer } from "@/app/models/common";
import { MutableRefObject } from "react";
import { FormState, UseFormRegister } from "react-hook-form";

export type ContactMeForm = {
  name: string;
  email: string;
  message: string;
};

export type ContactMeContainerProps = AppContainer<{
  formState: FormState<ContactMeForm>;
  isSending: boolean;
  confirmModal: {
    ref: MutableRefObject<HTMLDialogElement | null>;
    onClickYes: () => void;
    onClickNo: () => void;
  };
  register: UseFormRegister<ContactMeForm>;
  onAttactFile: () => void;
  onSubmit: () => void;
}>;
