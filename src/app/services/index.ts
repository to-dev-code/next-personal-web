import axios, { AxiosResponse } from "axios";
import { SendContactRequest, SendContactResponse } from "./type";
import { ContactMeForm } from "../components/containers/contact-me/type";

export const sendContact = (data: ContactMeForm) => {
  return axios.post<
    any,
    AxiosResponse<SendContactResponse>,
    SendContactRequest
  >(
    "https://api.web3forms.com/submit",
    {
      access_key: process.env.NEXT_PUBLIC_WEB_3_FORMS_ACCESS_KEY,
      ...data,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};
