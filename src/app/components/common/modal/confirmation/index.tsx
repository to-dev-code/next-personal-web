import { forwardRef } from "react";
import { ConfirmationModalProps } from "./type";
import Modal from "..";

const ConfirmationModal = forwardRef<HTMLDialogElement, ConfirmationModalProps>(
  function ConfirmationModal({ content, onYes, onNo }, ref) {
    return (
      <Modal
        id={"app-confirm-modal"}
        ref={ref}
        title={<div className="text-xl font-bold">{"Confirmation"}</div>}
        content={<div className="text-md">{content}</div>}
        footer={
          <div className="flex gap-x-2 justify-end">
            <button
              type={"button"}
              className="btn bg-blue-600 text-white border-none px-8 hover:bg-blue-700"
              onClick={onYes}
            >
              {"Yes"}
            </button>
            <button
              type={"button"}
              className="btn btn-ghost text-white hover:bg-blue-700 px-8 border border-white"
              onClick={onNo}
            >
              {"No"}
            </button>
          </div>
        }
      />
    );
  }
);

export default ConfirmationModal;
