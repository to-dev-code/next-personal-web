import { useCallback, useContext, useEffect, useState } from "react";
import { AboutMeTabContainerProps } from "./type";
import { ContentSectionElementContext } from "../../app-layout";

const AboutMeTabContainer = ({
  render,
  sections,
}: AboutMeTabContainerProps) => {
  const contentSectionEl = useContext(ContentSectionElementContext);
  const [sectionIdCenteredScreen, setSectionIdCenteredScreen] = useState(
    sections.personalInfo.id
  );

  const onScrollListener = useCallback(
    ({ target }: Event) => {
      const contentSection = target as HTMLDivElement | null;
      if (
        contentSection &&
        sections.personalInfo.ref.current &&
        sections.technicalSkills.ref.current &&
        sections.workExperience.ref.current &&
        sections.education.ref.current
      ) {
        /* 
          Bounding Client Rectangle.
      */
        const contentSectionBounding = contentSection.getBoundingClientRect();
        const personalInfoBounding =
          sections.personalInfo.ref.current.getBoundingClientRect();
        const technicalSkillsBounding =
          sections.technicalSkills.ref.current.getBoundingClientRect();
        const workExperienceBounding =
          sections.workExperience.ref.current.getBoundingClientRect();
        const educationBounding =
          sections.education.ref.current.getBoundingClientRect();
        /*
          Center content section position.
      */
        const centerPosition =
          contentSectionBounding.bottom - contentSection.offsetHeight / 2;
        /*
          Set the section id is on center section.
      */
        switch (true) {
          case personalInfoBounding.top < centerPosition &&
            personalInfoBounding.bottom > centerPosition:
            setSectionIdCenteredScreen(sections.personalInfo.ref.current.id);
            break;
          case technicalSkillsBounding.top < centerPosition &&
            technicalSkillsBounding.bottom > centerPosition:
            setSectionIdCenteredScreen(sections.technicalSkills.ref.current.id);
            break;
          case workExperienceBounding.top < centerPosition &&
            workExperienceBounding.bottom > centerPosition:
            setSectionIdCenteredScreen(sections.workExperience.ref.current.id);
            break;
          case educationBounding.top < centerPosition &&
            educationBounding.bottom > centerPosition:
            setSectionIdCenteredScreen(sections.education.ref.current.id);
            break;
        }
      }
    },
    [
      sections.education.ref,
      sections.personalInfo.ref,
      sections.technicalSkills.ref,
      sections.workExperience.ref,
    ]
  );

  const onClickTab = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  useEffect(() => {
    contentSectionEl?.addEventListener("scroll", onScrollListener);
    return () => {
      contentSectionEl?.removeEventListener("scroll", onScrollListener);
    };
  }, [contentSectionEl, onScrollListener]);

  return render({
    sectionIdCenteredScreen,
    onClickTab,
  });
};

export default AboutMeTabContainer;
