import { AppLayoutContainerState } from "@/app/containers/app-layout/type";

export type AppMenuProps = Pick<
  AppLayoutContainerState,
  "menuList" | "isOpenMenu"
>;
