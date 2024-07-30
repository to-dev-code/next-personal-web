"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactMeContainerProps, ContactMeForm } from "./type";
import { useState } from "react";
import { sendContact } from "@/app/services";
import { useModal, useToast } from "@/app/hooks";
import { AxiosError } from "axios";

const ContactMePageContainer = ({ render }: ContactMeContainerProps) => {
  const { showToast } = useToast();
  const { onConfirmModal } = useModal();
  const { getValues, register, handleSubmit, formState } =
    useForm<ContactMeForm>({
      mode: "onSubmit",
    });
  const [isSending, setSending] = useState(false);

  const onSendContact: SubmitHandler<ContactMeForm> = async () => {
    if (!isSending) {
      const result = await onConfirmModal(
        "Can you confirm to send your message?"
      );
      if (result === "yes") {
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
      }
    }
  };

  const onAttactFile = () => {
    showToast({
      type: "info",
      content: "I am apologize, The attachment service is unavailable.",
    });
  };

  return render({
    formState,
    isSending,
    register,
    onAttactFile,
    onSubmit: handleSubmit(onSendContact),
  });
};

export default ContactMePageContainer;
