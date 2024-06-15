import { AppTabProps } from "@/app/components/app-tab/type";
import { Menu } from "@/app/constants/menu";
import { AppContainer } from "@/app/models/common";
import { Dispatch, RefObject, SetStateAction } from "react";

export type ContentSectionElement = HTMLDivElement | null;

export type AppLayoutContainerState = {
  menuList: Menu[];
  isOpenMenu: boolean;
  history: Menu[];
  currentPath: string;
  contentSectionElement: ContentSectionElement;
  contentSectionRef: RefObject<HTMLDivElement>;
  onCloseTab: (menu: Menu) => void;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export type AppLayoutContainerProps = AppContainer<AppLayoutContainerState>;
