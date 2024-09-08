import { PersonalInfoSectionProps } from "./type";
import Icon from "@/app/components/common/icon";
import Image from "next/image";

const PersonalInfoSection = ({
  age,
  personalInfo: { id, ref },
}: PersonalInfoSectionProps) => {
  return (
    <div
      id={id}
      ref={ref}
      className="rounded-box shadow-lg flex bg-neutral-content items-center min-w-fit gap-10"
    >
      <div className="bg-[url(/assets/image/deskspace.jpg)] bg-cover rounded-s-box">
        <div className="min-w-[400px] h-[320px] relative backdrop-blur-sm bg-white/10 rounded-s-box">
          <div className="min-w-96 h-[420px] overflow-hidden absolute top-[-100px]">
            <Image
              src={"/assets/image/profile.png"}
              alt={"profile"}
              className="object-cover shadow-xl"
              width={800}
              height={0}
              loading={"lazy"}
            />
          </div>
        </div>
      </div>
      <div className="min-w-fit">
        <div className="text-4xl font-bold">{"Sophon Inkham"}</div>
        <div className="text-xl">{"Software engineer"}</div>
        <div className="divider my-2"></div>
        <div className="flex gap-2">
          {`Age: ${age} year | Nationality:`}
          <Icon name={"th-flag"} />
          {"Thai"}
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <div>{"8/9 No. 4, Tha Talat, Sam Pharn, Nakhon Phatom, 73110"}</div>
          <div>{"sophon.inkham@gmail.com"}</div>
          <div>{"(+66) 889241368"}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
