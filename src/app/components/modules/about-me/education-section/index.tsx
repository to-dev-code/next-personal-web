import { EducationSectionProps } from "./type";

const EducationSection = ({ education }: EducationSectionProps) => {
  return <div id={education.id} ref={education.ref}></div>;
};

export default EducationSection;
