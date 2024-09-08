import { EducationSectionProps } from "./type";
import Icon from "@/app/components/common/icon";
import LinkNewTab from "@/app/components/common/link";

const EducationSection = ({
  education: { id, ref },
}: EducationSectionProps) => {
  return (
    <div id={id} ref={ref} className="rounded-box shadow-lg flex bg-neutral-content min-w-fit gap-y-8 p-10 flex flex-col">
        <div className="text-2xl">{`Education`}</div>
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-4 items-top">
            <div className="min-w-40 text-right">{"2016 - 2020"}</div>
            <Icon
              name={"circle-checked"}
              strokeColor="#a6adbb"
              width={25}
              height={25}
            />
            <LinkNewTab
              className="card flex flex-col gap-y-2 bg-base-100 p-4"
              href={"https://www.kmitl.ac.th/"}
            >
              <div className="text-lg">
                {"King Mongkut's Institute of Technology Ladkrabang"}
              </div>
              <div>
                {
                  "Bachelor's Degree in Industrial Education and Technology, Major Computer Engineering"
                }
              </div>
            </LinkNewTab>
          </div>
        </div>
    </div>
  );
};

export default EducationSection;
