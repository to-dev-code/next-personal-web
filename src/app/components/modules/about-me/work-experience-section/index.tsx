import { WorkExperienceSectionProps } from "./type";

const WorkExperienceSection = ({
  workExperience,
}: WorkExperienceSectionProps) => {
  return <div id={workExperience.id} ref={workExperience.ref}></div>;
};

export default WorkExperienceSection;
