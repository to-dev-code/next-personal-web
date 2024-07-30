"use client";
import { Fragment } from "react";
import AboutMeTab from "../../components/modules/about-me/about-me-tab";
import PersonalInfoSection from "../../components/modules/about-me/personal-info-section";
import TechnicalSkillsSection from "../../components/modules/about-me/technical-skills-section";
import WorkExperienceSection from "../../components/modules/about-me/work-experience-section";
import EducationSection from "@/app/components/modules/about-me/education-section";
import AboutMePageContainer from "@/app/components/containers/about-me/about-me-page";
import AboutMeTabContainer from "@/app/components/containers/about-me/about-me-tab";

export default function AboutMePage() {
  return (
    <AboutMePageContainer
      render={({ age, sections }) => {
        return (
          <Fragment>
            <AboutMeTabContainer
              sections={sections}
              render={(aboutMeTabState) => {
                return (
                  <AboutMeTab
                    {...aboutMeTabState}
                    sections={sections}
                  />
                );
              }}
            />
            <div className="mx-10 my-14 text-sm flex flex-col gap-y-16">
              <PersonalInfoSection
                age={age}
                personalInfo={sections.personalInfo}
              />
              <TechnicalSkillsSection
                technicalSkills={sections.technicalSkills}
              />
              <WorkExperienceSection workExperience={sections.workExperience} />
              <EducationSection education={sections.education} />
            </div>
          </Fragment>
        );
      }}
    />
  );
}
