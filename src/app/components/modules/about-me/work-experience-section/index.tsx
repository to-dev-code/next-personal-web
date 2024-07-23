import { useState } from "react";
import { Tabs, WorkExperienceSectionProps } from "./type";
import Permanent from "./permanent";
import cn from "@/app/utils/cn";

const WorkExperienceSection = ({
  workExperience: { id, ref },
}: WorkExperienceSectionProps) => {
  const [activeTab, setActiveTab] = useState<Tabs>("permanent");
  return (
    <div id={id} ref={ref}>
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <input
          type="radio"
          name="permanent-tab"
          role="tab"
          className={cn(
            "tab transition-colors !border-0",
            activeTab === "permanent" ? "!bg-[#191e24]" : ""
          )}
          aria-label="Permanent"
          checked={activeTab === "permanent"}
          onChange={() => setActiveTab("permanent")}
        />
        <div
          role="tabpanel"
          className="tab-content bg-[#191e24] rounded-box p-10 min-h-72"
        >
          <Permanent />
        </div>
        <input
          type="radio"
          name="freelance-tab"
          role="tab"
          className={cn(
            "tab transition-colors !border-0",
            activeTab === "freelance" ? "!bg-[#191e24]" : ""
          )}
          aria-label="Freelance"
          checked={activeTab === "freelance"}
          onChange={() => setActiveTab("freelance")}
        />
        <div
          role="tabpanel"
          className="tab-content bg-[#191e24] rounded-box p-6 min-h-72"
        >
          {"Content not found"}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
