"use client"
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { ToastContextType, ToastState } from "./type";
import { createPortal } from "react-dom";
import { delay } from "@/app/utils/delay";
import Icon from "../../common/icon";
import cn from "@/app/utils/cn";

type CompleteToastState = ToastState & { visible: boolean };

export const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toastState, setToastState] = useState<CompleteToastState>({
    type: "info",
    content: "",
    visible: false,
  });

  const showToast = (state: ToastState) => {
    setToastState(() => {
      return {
        ...state,
        visible: true,
      };
    });
  };

  useEffect(() => {
    if (toastState.visible) {
      delay(5000).then(() => {
        setToastState((current) => {
          return { ...current, visible: false };
        });
      });
    }
  }, [toastState.visible]);

  return (
    <ToastContext.Provider
      value={{
        showToast,
      }}
    >
      {toastState.visible &&
        createPortal(
          <div className="toast toast-top toast-center top-4">
            <div
              className={cn(
                "alert min-w-96 drop-shadow-xl",
                "alert-" + toastState.type
              )}
            >
              {
                <Icon
                  name={
                    toastState.type === "success"
                      ? "circle-checked"
                      : toastState.type === "error"
                      ? "circle-cross"
                      : "info"
                  }
                  width={40}
                  height={40}
                />
              }
              <span>{toastState.content}</span>
            </div>
          </div>,
          document.body
        )}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
