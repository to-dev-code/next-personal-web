import { useContext } from "react";
import { ToastContext } from "../components/providers/toast-provider";
import { ModalContext } from "../components/providers/modal-provider";
import { ThemeContext } from "../components/providers/theme-provider";
/*
    Custom hooks with react context.
*/
export const useToast = () => useContext(ToastContext);
export const useModal = () => useContext(ModalContext);
export const useTheme = () => useContext(ThemeContext)
