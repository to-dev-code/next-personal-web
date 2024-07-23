import { AboutMePageContainerState } from "@/app/containers/about-me/about-me-page/type";

export type TechnicalSkillsSectionProps = Pick<
  AboutMePageContainerState["sections"],
  "technicalSkills"
>;
