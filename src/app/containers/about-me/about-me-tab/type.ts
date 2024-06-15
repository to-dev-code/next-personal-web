import { AboutMeTabProps } from "@/app/components/modules/about-me/about-me-tab/type";
import { AppContainer } from "@/app/models/common";

export type AboutMeTabContainerState = {
  sectionIdCenteredScreen: string;
  onClickTab: (id: string) => void;
};

export type AboutMeTabContainerProps = AppContainer<AboutMeTabContainerState> &
  Pick<AboutMeTabProps, "sections">;
