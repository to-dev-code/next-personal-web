import { v4 as uuidv4 } from "uuid";
import { AboutMeTabProps } from "./type";
import cn from "@/app/utils/cn";
import AboutMeTabContainer from "../../containers/about-me-tab";

const AboutMeTab = ({ sections }: AboutMeTabProps) => {
  return (
    <AboutMeTabContainer
      sections={sections}
      render={({ sectionIdCenteredScreen, onClickTab }) => (
        <div className="sticky flex bg-gradient-to-b from-primary top-[-1px] h-[144px] z-10">
          <div className="join m-auto">
            {Object.entries(sections).map(([_, section]) => {
              return (
                <div
                  key={uuidv4()}
                  className={"btn join-item h-16 animate-none"}
                  onClick={() => onClickTab(section.id)}
                >
                  <span
                    className={cn(
                      "py-2 transition-all border-b-2",
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
      )}
    />
  );
};

export default AboutMeTab;
