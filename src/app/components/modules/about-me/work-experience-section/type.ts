import { AboutMePageContainerState } from "@/app/containers/about-me/about-me-page/type";

export type Tabs = 'permanent' | 'freelance'

export type WorkExperienceSectionProps = Pick<
  AboutMePageContainerState["sections"],
  "workExperience"
>;
