import { AppLayoutContainerState } from "@/app/containers/app-layout/type";

export type AppTabProps = Pick<
  AppLayoutContainerState,
  "history" | "currentPath" | "onCloseTab"
>;
