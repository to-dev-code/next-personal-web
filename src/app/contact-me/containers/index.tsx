"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactMeContainerProps, ContactMeForm } from "./type";
import { useRef, useState } from "react";
import { sendContact } from "@/app/services";
import { useToast } from "@/app/hooks";
import { AxiosError } from "axios";

const ContactMePageContainer = ({ render }: ContactMeContainerProps) => {
  const { showToast } = useToast();
  const { getValues, register, handleSubmit, formState } =
    useForm<ContactMeForm>({
      mode: "onSubmit",
    });
  const confirmModalRef = useRef<HTMLDialogElement>(null);
  const [isSending, setSending] = useState(false);

  const onSendContact: SubmitHandler<ContactMeForm> = () => {
    if (!isSending) {
      confirmModalRef.current?.showModal();
    }
  };

  const onClickYes = async () => {
    confirmModalRef.current?.close();
    setSending(true);
    try {
      const response = await sendContact(getValues());
      showToast({
        type: response.data.success ? "success" : "error",
        content: response.data.message,
      });
    } catch (e) {
      if (e instanceof AxiosError) {
        showToast({
          type: "error",
          content: e.message,
        });
      }
    } finally {
      setSending(false);
    }
  };

  const onClickNo = () => {
    confirmModalRef.current?.close();
  };

  const onAttactFile = () => {
    showToast({
      type: "info",
      content: "Unavailable service.",
    });
  };

  return render({
    formState,
    isSending,
    confirmModal: {
      ref: confirmModalRef,
      onClickYes,
      onClickNo,
    },
    register,
    onAttactFile,
    onSubmit: handleSubmit(onSendContact),
  });
};

export default ContactMePageContainer;
