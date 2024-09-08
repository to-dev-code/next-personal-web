import { Menu } from "@/app/constants/menu";
import { AppContainer } from "@/app/models/common";
import { Dispatch, RefObject, SetStateAction } from "react";
import { ThemeContextValue } from "../../providers/theme-provider/type";

export type MainContentContextValue = HTMLDivElement | null;

export type AppLayoutContainerState = Pick<ThemeContextValue, "toggleTheme"> & {
  menuList: Menu[];
  isOpenMenu: boolean;
  history: Menu[];
  currentPath: string;
  contentSectionElement: MainContentContextValue;
  contentSectionRef: RefObject<HTMLDivElement>;
  onCloseTab: (menu: Menu) => void;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export type AppLayoutContainerProps = AppContainer<AppLayoutContainerState>;
