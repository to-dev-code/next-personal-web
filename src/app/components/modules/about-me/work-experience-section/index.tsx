import Icon from "@/app/components/common/icon";
import { WorkExperienceSectionProps } from "./type";

const WorkExperienceSection = ({
  workExperience,
}: WorkExperienceSectionProps) => {
  return (
    <div id={workExperience.id} ref={workExperience.ref}>
      <div className="rounded-box bg-[#191e24] p-10">
        <div className="text-xl mb-8">{"Work experience"}</div>
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-4 items-top">
            <div className="min-w-40 text-right">{"2023 - Current"}</div>
            <div>
              <Icon name={"circle-checked"} strokeColor="#ffffff" />
            </div>
            <div className="timeline-box flex flex-col gap-y-2">
              <div className="text-lg">{"Software engineer associate"}</div>
              <div>
                <div>
                  {"ttb spark - TMBThanachart Bank Public Company Limited"}
                </div>
                <div>{"Chatuchak, Bangkok"}</div>
              </div>
              <div>
                <div>{"Responsability"}</div>
                <ul>
                  <li className="indent-4">{"- "}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4 items-top">
            <div className="min-w-40 text-right">{"2021 - 2023"}</div>
            <div>
              <Icon name={"circle-checked"} strokeColor="#ffffff" />
            </div>
            <div className="timeline-box flex flex-col gap-y-2">
              <div className="text-lg">{"Front-end developer"}</div>
              <div>
                <div>{"Strategic Software Solution co., ltd"}</div>
                <div>{"Pakked, Nonthaburi"}</div>
              </div>
              <div>
                <div>{"Responsability"}</div>
                <ul>
                  <li className="indent-4">{"- "}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
