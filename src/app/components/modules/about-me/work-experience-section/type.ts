import { AboutMePageContainerState } from "@/app/containers/about-me/about-me-page/type";

export type WorkExperienceSectionProps = Pick<
  AboutMePageContainerState["sections"],
  "workExperience"
>;
