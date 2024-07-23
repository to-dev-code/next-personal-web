"use client";
import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useRef,
  useState,
} from "react";
import { ConfirmModalResult, InfoModalResult, ModalContextType } from "./type";
import ConfirmationModal from "../../common/modal/confirmation";
import InformationModal from "../../common/modal/information";

export const ModalContext = createContext<ModalContextType>({
  onConfirmModal: () => Promise.resolve("yes"),
  onInformationModal: () => Promise.resolve("ok"),
});

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [confirmModalContent, setConfirmModalContent] = useState<ReactNode>();
  const confirmModalRef = useRef<HTMLDialogElement>(null);

  const [infoModalContent, setInfoModalContent] = useState<ReactNode>();
  const infoModalRef = useRef<HTMLDialogElement>(null);

  return (
    <ModalContext.Provider
      value={{
        onConfirmModal: (content) => {
          setConfirmModalContent(content);
          const confirmModal = confirmModalRef.current;
          confirmModal?.showModal();
          return new Promise<ConfirmModalResult>((resolve) => {
            const listenner = () => {
              resolve(confirmModal?.returnValue as ConfirmModalResult);
              confirmModal?.removeEventListener("close", listenner);
            };
            confirmModal?.addEventListener("close", listenner);
          });
        },
        onInformationModal: (content) => {
          setInfoModalContent(content);
          const infoModal = infoModalRef.current;
          infoModal?.showModal();
          return new Promise<InfoModalResult>((resolve) => {
            const listenner = () => {
              resolve(infoModal?.returnValue as InfoModalResult);
              infoModal?.removeEventListener("close", listenner);
            };
            infoModal?.addEventListener("close", listenner);
          });
        },
      }}
    >
      <ConfirmationModal
        content={confirmModalContent}
        ref={confirmModalRef}
        onYes={() => confirmModalRef.current?.close("yes")}
        onNo={() => confirmModalRef.current?.close("no")}
      />
      <InformationModal
        content={infoModalContent}
        ref={infoModalRef}
        onOk={() => infoModalRef.current?.close("ok")}
      />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
