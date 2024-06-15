import { AboutMePageContainerState } from "@/app/features/about-me/about-me-page/type";

export type PersonalInfoSectionProps = Pick<AboutMePageContainerState, "age"> &
  Pick<AboutMePageContainerState["sections"], "personalInfo">;
