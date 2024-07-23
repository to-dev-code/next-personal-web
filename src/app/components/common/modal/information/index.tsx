import { forwardRef } from "react";
import { InformationModalProps } from "./type";
import Modal from "..";

const InformationModal = forwardRef<HTMLDialogElement, InformationModalProps>(
  function InformationModal({ content, onOk }, ref) {
    return (
      <Modal
        id={"app-confirm-modal"}
        ref={ref}
        title={<div className="text-xl font-bold">{"Information"}</div>}
        content={<div className="text-md">{content}</div>}
        footer={
          <div className="flex gap-x-2 justify-end">
            <button
              type={"button"}
              className="btn bg-blue-600 text-white border-none px-8 hover:bg-blue-700"
              onClick={onOk}
            >
              {"OK"}
            </button>
          </div>
        }
      />
    );
  }
);

export default InformationModal;
