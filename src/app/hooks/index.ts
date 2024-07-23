import { useContext } from "react";
import { ToastContext } from "../components/providers/toast-provider";
import { ModalContext } from "../components/providers/modal-provider";
/*
    Custom hooks with react context.
*/
export const useToast = () => useContext(ToastContext);
export const useModal = () => useContext(ModalContext);
