import { AppContainer } from "@/app/models/common";
import { AboutMePageContainerState } from "../about-me-page/type";

export type AboutMeTabContainerState = {
  sectionIdCenteredScreen: string;
  onClickTab: (id: string) => void;
};

export type AboutMeTabContainerProps = AppContainer<AboutMeTabContainerState> &
  Pick<AboutMePageContainerState, "sections">;
