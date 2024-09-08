import { forwardRef } from "react";
import { ConfirmationModalProps } from "./type";
import Modal from "..";
import Button from "../../button";

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
            <Button
              type={"button"}
              onClick={onYes}
            >
              {"Yes"}
            </Button>
            <Button
              type={"button"}
              onClick={onNo}
            >
              {"No"}
            </Button>
          </div>
        }
      />
    );
  }
);

export default ConfirmationModal;
