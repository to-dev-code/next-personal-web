"use client";
import { Fragment } from "react";
import AboutMeTab from "./components/about-me-tab";
import PersonalInfoSection from "./components/personal-info-section";
import TechnicalSkillsSection from "./components/technical-skills-section";
import WorkExperienceSection from "./components/work-experience-section";
import AboutMePageContainer from "./containers/about-me-page";

export default function AboutMePage() {
  return (
    <AboutMePageContainer
      render={({ age, sections }) => (
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
      )}
    />
  );
}
