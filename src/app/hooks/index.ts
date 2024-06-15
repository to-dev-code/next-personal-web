import { useContext } from "react";
import { ToastContext } from "../components/providers/toast-provider";
/*
    Custom hooks with react context.
*/
export const useToast = () => useContext(ToastContext);
