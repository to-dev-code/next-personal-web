"use client";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AboutMeTabContainerProps } from "./type";
import { ContentSectionElementContext } from "@/app/components/containers/app-layout";
import { getSession, setSession } from "@/app/utils/session";
import { ContentSectionElement } from "../../app-layout/type";
import { SessionKeys } from "@/app/enums";

const { ABOUT_ME_PAGE_SCROLL_POSITION } = SessionKeys;

const AboutMeTabContainer = ({
  render,
  sections,
}: AboutMeTabContainerProps) => {
  const contentSectionEl = useContext(ContentSectionElementContext);
  const scrollTopRef = useRef(0);
  const [sectionIdCenteredScreen, setSectionIdCenteredScreen] = useState(
    sections.personalInfo.id
  );

  const onScrollListener = useCallback(
    (event: Event) => {
      const contentSection = event.target as ContentSectionElement;
      if (
        contentSection &&
        sections.personalInfo.ref.current &&
        sections.technicalSkills.ref.current &&
        sections.workExperience.ref.current &&
        sections.education.ref.current
      ) {
        /* 
          Get bounding client rectangle.
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
        /*
          Save current scroll position.
        */
        scrollTopRef.current = contentSection.scrollTop;
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
    /*
        Get last scroll position from session storage
    */
    const lastScrollPosition = getSession(ABOUT_ME_PAGE_SCROLL_POSITION);
    if (lastScrollPosition) {
      contentSectionEl?.scrollTo({
        top: parseInt(lastScrollPosition),
      });
    }
    contentSectionEl?.addEventListener("scroll", onScrollListener);
    return () => {
      contentSectionEl?.removeEventListener("scroll", onScrollListener);
      /*
        Keep last scroll position to session storage
      */
      setSession(
        ABOUT_ME_PAGE_SCROLL_POSITION,
        scrollTopRef.current.toString()
      );
    };
  }, [contentSectionEl, onScrollListener]);

  return render({
    sectionIdCenteredScreen,
    onClickTab,
  });
};

export default AboutMeTabContainer;
