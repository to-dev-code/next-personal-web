import { AppContainer } from "@/app/models/common";
import { AboutMePageContainerState } from "../about-me-page/type";
import { AboutMeTabProps } from "@/app/about-me/about-me-tab/type";

export type AboutMeTabContainerState = {
  sectionIdCenteredScreen: string;
  onClickTab: (id: string) => void;
};

export type AboutMeTabContainerProps = AppContainer<AboutMeTabContainerState> &
  Pick<AboutMeTabProps, "sections">;
