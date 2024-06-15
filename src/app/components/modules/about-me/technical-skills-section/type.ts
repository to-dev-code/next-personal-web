import { AboutMePageContainerState } from "@/app/containers/about-me/about-me-page/type";

export type LinkNewTabProps = {
  href: string;
  className?: string;
};

export type TechnicalSkillsSectionProps = Pick<
  AboutMePageContainerState["sections"],
  "technicalSkills"
>;
