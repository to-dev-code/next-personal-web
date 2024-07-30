import { AppContainer } from "@/app/models/common";
import { RefObject } from "react";

type SectionKeys =
  | "personalInfo"
  | "technicalSkills"
  | "workExperience"
  | "education";

type SectionProps = {
  title: string;
  id: string;
  ref: RefObject<HTMLDivElement>;
};

export type AboutMePageContainerState = {
  age: string;
  sections: { [key in SectionKeys]: SectionProps };
};

export type AboutMePageContainerProps = AppContainer<AboutMePageContainerState>;
