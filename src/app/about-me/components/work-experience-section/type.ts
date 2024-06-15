import { AboutMePageContainerState } from "@/app/features/about-me/about-me-page/type";

export type WorkExperienceSectionProps = Pick<
  AboutMePageContainerState["sections"],
  "workExperience"
>;
