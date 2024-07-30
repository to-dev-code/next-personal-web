import { AppLayoutContainerState } from "@/app/components/containers/app-layout/type";

export type AppMenuProps = Pick<
  AppLayoutContainerState,
  "menuList" | "isOpenMenu"
>;
