"use client";
import { Fragment } from "react";
import AboutMeTab from "../../components/modules/about-me/about-me-tab";
import PersonalInfoSection from "../../components/modules/about-me/personal-info-section";
import TechnicalSkillsSection from "../../components/modules/about-me/technical-skills-section";
import WorkExperienceSection from "../../components/modules/about-me/work-experience-section";
import AboutMePageContainer from "@/app/containers/about-me/about-me-page";

export default function AboutMePage() {
  return (
    <AboutMePageContainer
      render={({ age, sections }) => {
        return (
          <Fragment>
            <AboutMeTab sections={sections} />
            <div className="mx-10 my-14 text-sm flex flex-col gap-20">
              <PersonalInfoSection
                age={age}
                personalInfo={sections.personalInfo}
              />
              <TechnicalSkillsSection
                technicalSkills={sections.technicalSkills}
              />
              <WorkExperienceSection workExperience={sections.workExperience} />
            </div>
          </Fragment>
        );
      }}
    />
  );
}
