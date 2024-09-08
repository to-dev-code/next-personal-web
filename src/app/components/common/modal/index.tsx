import { forwardRef } from "react";
import { ModalProps } from "./type";
import cn from "@/app/utils/cn";

const Modal = forwardRef<HTMLDialogElement, ModalProps>(function Modal(
  { id, className, title, content, footer },
  ref
) {
  return (
    <dialog id={id} className={"modal"} ref={ref}>
      <div className={cn("modal-box flex flex-col text-white", className)}>
        {title && <div className="mb-4">{title}</div>}
        {content && <div className="mb-10">{content}</div>}
        {footer}
      </div>
    </dialog>
  );
});

export default Modal;
