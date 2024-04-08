import { TMenu } from "@/app/config/menu-config";
import { TAppContainer } from "@/app/models/common";
import { Dispatch, SetStateAction } from "react";

export type TMenuContainerState = {
  menuList: TMenu[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type TMenuContainerProps = TAppContainer<TMenuContainerState>;
