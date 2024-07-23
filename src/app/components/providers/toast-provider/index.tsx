"use client";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { ToastContextType, ToastState, ToastType } from "./type";
import { createPortal } from "react-dom";
import { sleep } from "@/app/utils/sleep";
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

  const getToastTypeClass = (type: ToastType) => {
    switch (type) {
      case "info":
        return "alert-info";
      case "error":
        return "alert-error";
      case "success":
        return "alert-success";
    }
  };

  useEffect(() => {
    if (toastState.visible) {
      sleep(5000).then(() => {
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
          <div className="toast toast-top toast-center top-4 z-50">
            <div
              className={cn(
                "alert min-w-96 drop-shadow-xl",
                getToastTypeClass(toastState.type)
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
