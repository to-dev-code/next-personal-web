"use client";
import { Fragment } from "react";
import Link from "next/link";
import ContactMePageContainer from "./containers";
import Icon from "../components/common/icon";
import Modal from "../components/common/modal";
import Tooltip from "../components/common/tooltip";

export default function ContactMePage() {
  return (
    <ContactMePageContainer
      render={(state) => (
        <div className="mx-10 my-8">
          <div className="text-3xl font-bold mb-6">{"Contact me"}</div>
          <div className="flex w-full justify-between gap-x-8">
            <form
              className="flex flex-col gap-y-4 w-6/12"
              onSubmit={state.onSubmit}
            >
              <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                  <Icon name={"user"} strokeColor="#ffffff" />
                  <input
                    type="text"
                    className="grow"
                    placeholder="Your name"
                    {...state.register("name", { required: true })}
                  />
                </label>
                {state.formState.errors.name && (
                  <div className="label">
                    <span className="label-text-alt text-error">
                      {state.formState.errors.name.type === "required" &&
                        "Required field"}
                    </span>
                  </div>
                )}
              </div>
              <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                  <Icon name={"email"} strokeColor="#ffffff" />
                  <input
                    type="text"
                    className="grow"
                    placeholder="Your email"
                    {...state.register("email", {
                      required: true,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email",
                      },
                    })}
                  />
                </label>
                {state.formState.errors.email && (
                  <div className="label">
                    <span className="label-text-alt text-error">
                      {state.formState.errors.email.type === "required" &&
                        "Required field"}
                      {state.formState.errors.email.type === "pattern" &&
                        state.formState.errors.email.message}
                    </span>
                  </div>
                )}
              </div>
              <div className="form-control relative">
                <textarea
                  className="textarea w-full textarea-bordered min-h-60 resize-none"
                  placeholder="Your message"
                  {...state.register("message")}
                />
                <div className="absolute bottom-[10px] left-[15px]">
                  <Tooltip content={"Attachment"}>
                    <Icon
                      name={"attacht-file"}
                      fillColor="#ffffff"
                      onClick={state.onAttactFile}
                    />
                  </Tooltip>
                </div>
              </div>
              <button
                type={"submit"}
                className="btn bg-blue-600 text-white hover:bg-blue-700 text-accent text-lg border-none"
              >
                {!state.isSending && "Send"}
                {state.isSending && (
                  <Fragment>
                    <span className="loading loading-spinner loading-md"></span>
                    {"Sending"}
                  </Fragment>
                )}
              </button>
            </form>
            <div className="divider divider-horizontal">{"OR"}</div>
            <div className="w-6/12">
              <div className="w-[320px] text-white flex flex-col gap-y-8">
                <Link href={""}>
                  <Tooltip
                    content="Click to my LinkedIn"
                    className="rounded-box bg-[#0077b5] flex gap-x-8 text-lg items-center px-6 min-h-16"
                  >
                    <Icon
                      name={"linkedin"}
                      fillColor="#ffffff"
                      width={30}
                      height={30}
                    />
                    {"Sophon Inkham"}
                  </Tooltip>
                </Link>
                <Link href={""}>
                  <Tooltip
                    content="Click to my Instragram"
                    className="rounded-box bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex gap-x-8 text-lg items-center px-6 min-h-16"
                  >
                    <Icon
                      name={"instagram"}
                      width={30}
                      height={30}
                      fillColor="#ffffff"
                    />
                    {"sophon.to"}
                  </Tooltip>
                </Link>
                <Link href={""}>
                  <Tooltip
                    content="Click to my Facebook"
                    className="rounded-box bg-[#1877f2] flex gap-x-8 text-lg items-center px-6 min-h-16"
                  >
                    <Icon
                      name={"facebook"}
                      fillColor="#ffffff"
                      width={30}
                      height={30}
                    />
                    {"Sophon Inkham"}
                  </Tooltip>
                </Link>
                <Link href={""}>
                  <Tooltip
                    content="Click to show QR code"
                    className="rounded-box bg-[#06c755] flex gap-x-8 text-lg items-center px-6 min-h-16"
                  >
                    <Icon
                      name={"line"}
                      width={30}
                      height={30}
                      fillColor="#ffffff"
                    />
                    {"ID: 0822479023"}
                  </Tooltip>
                </Link>
                <Link href={"tel:+66889241368"}>
                  <div className="rounded-box bg-secondary flex gap-x-8 text-lg items-center px-6 min-h-16">
                    <Icon
                      name={"phone-call"}
                      width={30}
                      height={30}
                      fillColor="#ffffff"
                    />
                    <span className="flex items-center gap-x-2">
                      <Icon name={"th-flag"} width={25} height={20} />
                      {"(+66) 889241368"}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Modal
            id={"confirm-send-contact-modal"}
            title={<div className="text-xl font-bold">{"Confirmation"}</div>}
            content={
              <div className="text-md">
                {"Do you confirm to send your information?"}
              </div>
            }
            footer={
              <div className="flex gap-x-2 justify-end">
                <button
                  type={"button"}
                  className="btn bg-blue-600 text-white border-none px-8 hover:bg-blue-700"
                  onClick={state.confirmModal.onClickYes}
                >
                  {"Yes"}
                </button>
                <button
                  type={"button"}
                  className="btn btn-ghost text-white hover:bg-blue-700 border border-white"
                  onClick={state.confirmModal.onClickNo}
                >
                  {"Back to edit"}
                </button>
              </div>
            }
            ref={state.confirmModal.ref}
          />
        </div>
      )}
    />
  );
}
