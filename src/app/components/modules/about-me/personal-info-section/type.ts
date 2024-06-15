import { AboutMePageContainerState } from "@/app/containers/about-me/about-me-page/type";

export type PersonalInfoSectionProps = Pick<AboutMePageContainerState, "age"> &
  Pick<AboutMePageContainerState["sections"], "personalInfo">;
