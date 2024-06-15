import { AboutMePageContainerState } from "@/app/features/about-me/about-me-page/type";

export type LinkNewTabProps = {
  href: string;
  className?: string;
};

export type TechnicalSkillsSectionProps = Pick<
  AboutMePageContainerState["sections"],
  "technicalSkills"
>;
