import { AboutMePageContainerState } from "@/app/components/containers/about-me/about-me-page/type";

export type EducationSectionProps = Pick<
  AboutMePageContainerState["sections"],
  "education"
>;
