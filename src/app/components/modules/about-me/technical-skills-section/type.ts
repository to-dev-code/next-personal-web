import { AboutMePageContainerState } from "@/app/components/containers/about-me/about-me-page/type";

export type TechnicalSkillsSectionProps = Pick<
  AboutMePageContainerState["sections"],
  "technicalSkills"
>;
