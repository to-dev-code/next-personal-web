"use client";
import { v4 as uuidv4 } from "uuid";
import { AboutMeTabProps } from "./type";
import cn from "@/app/utils/cn";

const AboutMeTab = ({
  sections,
  sectionIdCenteredScreen,
  onClickTab,
}: AboutMeTabProps) => {
  return (
    <div className="sticky flex bg-gradient-to-b from-base-200 top-[-1px] h-[144px] z-10">
      <div className="join m-auto shadow-lg">
        {Object.entries(sections).map(([_, section]) => {
          return (
            <div
              key={uuidv4()}
              className={"btn join-item h-16 bg-neutral-content border-neutral-content animate-none"}
              onClick={() => onClickTab(section.id)}
            >
              <span
                className={cn(
                  "py-2 transition-colors border-b-2",
                  sectionIdCenteredScreen === section.id
                    ? "border-error"
                    : "border-none"
                )}
              >
                {section.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMeTab;
