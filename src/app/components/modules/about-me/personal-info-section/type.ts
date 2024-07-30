import { AboutMePageContainerState } from "@/app/components/containers/about-me/about-me-page/type";

export type PersonalInfoSectionProps = Pick<AboutMePageContainerState, "age"> &
  Pick<AboutMePageContainerState["sections"], "personalInfo">;
