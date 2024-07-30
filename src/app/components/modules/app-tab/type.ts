import { AppLayoutContainerState } from "@/app/components/containers/app-layout/type";

export type AppTabProps = Pick<
  AppLayoutContainerState,
  "history" | "currentPath" | "onCloseTab"
>;
