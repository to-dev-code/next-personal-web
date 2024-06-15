"use client";
import { useRef } from "react";
import { getAge } from "@/app/utils/date";
import { AboutMePageContainerProps } from "./type";

const AboutMePageContainer = ({ render }: AboutMePageContainerProps) => {
  const personalInfoRef = useRef<HTMLDivElement>(null);
  const technicalSkillsRef = useRef<HTMLDivElement>(null);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  return render({
    age: getAge(new Date("1998-01-29")).toString(),
    sections: {
      personalInfo: {
        title: "Personal info.",
        id: "personal-info",
        ref: personalInfoRef,
      },
      technicalSkills: {
        title: "Technical skills",
        id: "technical-skills",
        ref: technicalSkillsRef,
      },
      workExperience: {
        title: "Work experience",
        id: "work-experience",
        ref: workExperienceRef,
      },
      education: {
        title: "Education",
        id: "education",
        ref: educationRef,
      },
    },
  });
};

export default AboutMePageContainer;
