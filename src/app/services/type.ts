import { ContactMeForm } from "../components/containers/contact-me/type";

export type SendContactRequest = {
  access_key?: string;
} & ContactMeForm;

export type SendContactResponse = {
  success: boolean;
  data: SendContactResponseData;
  message: string;
};

export type SendContactResponseData = {
  name: string;
  email: string;
  message: string;
};
