import { AboutMePageContainerState } from "@/app/containers/about-me/about-me-page/type";
import { AboutMeTabContainerState } from "@/app/containers/about-me/about-me-tab/type";

export type AboutMeTabProps = Pick<AboutMePageContainerState, "sections"> &
  AboutMeTabContainerState;
