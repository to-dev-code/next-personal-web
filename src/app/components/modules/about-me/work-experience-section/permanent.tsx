import Icon from "@/app/components/common/icon";
import Image from "next/image";
import LinkNewTab from "@/app/components/common/link";
import { getAge } from "@/app/utils/date";
import { Fragment } from "react";

const Permanent = () => {
  const totalYears = getAge(new Date("2021-01-01"));
  return (
    <Fragment>
      <div className="text-2xl mb-8">{`Total ${totalYears} years`}</div>
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-4 items-top">
          <div className="min-w-40 text-right">{"2023 - Current"}</div>
          <Icon
            name={"circle-checked"}
            strokeColor="#a6adbb"
            width={25}
            height={25}
          />
          <LinkNewTab
            className="card flex flex-col gap-y-4 bg-secondary p-4"
            href={"https://www.ttbspark.com/"}
          >
            <div className="bg-white rounded w-fit">
              <Image
                src={"/assets/vector/ttbspark.svg"}
                alt={"ttb-spark"}
                width={200}
                height={0}
              />
            </div>
            <div className="text-lg font-bold">
              {"Software engineer associate"}
            </div>
            <div>
              <div>
                {"ttb spark, TMBThanachart Bank Public Company Limited,"}
              </div>
              <div>{"Chatuchak, Bangkok"}</div>
            </div>
            <div>
              <div className="font-bold mb-3">{"Responsability"}</div>
              <ul role="list" className="list-disc pl-5 space-y-3">
                <li>
                  {
                    "Actively participated in all Scrum ceremonies (e.g., Sprint planning, Daily scrum, Sprint review, Sprint retrospective)."
                  }
                </li>
                <li>
                  {
                    "Collaborated with cross-functional teams (UX/UI Designers, System analysis, Business analysis, Quality assurance, DevOps) to deliver products."
                  }
                </li>
                <li>
                  {
                    "Developed and implemented software using modern front-end frameworks like Next.js with redux-toolkit and Style libraries like Emotion-styled component and Tailwind."
                  }
                </li>
                <li>
                  {
                    "Wrote unit tests with a coverage of 90% to ensure code quality and maintainability with Jest."
                  }
                </li>
                <li>
                  {
                    "Provided code reviews for developer in team, identifying potential bugs and suggesting best practices."
                  }
                </li>
              </ul>
            </div>
          </LinkNewTab>
        </div>
        <div className="flex gap-x-4 items-top">
          <div className="min-w-40 text-right">{"2021 - 2023"}</div>
          <Icon
            name={"circle-checked"}
            strokeColor="#a6adbb"
            width={25}
            height={25}
          />
          <LinkNewTab
            className="card flex flex-col gap-y-4 bg-secondary p-4"
            href={"https://www.s3-world.com/"}
          >
            <Image
              src={"/assets/image/scube.jpg"}
              alt={"scube"}
              className="rounded"
              width={140}
              height={0}
            />
            <div className="text-lg font-bold">{"Front-end developer"}</div>
            <div>
              <div>{"Strategic Software Solution co., ltd"}</div>
              <div>{"Pakked, Nonthaburi"}</div>
            </div>
            <div>
              <div className="font-bold mb-3">{"Responsability"}</div>
              <ul role="list" className="list-disc pl-5 space-y-3">
                <li>
                  {
                    "Designed, developed, and implemented reusable Angular components for various functionalities."
                  }
                </li>
                <li>
                  {
                    "Debugged and resolved complex front-end issues to ensure smooth application functionality."
                  }
                </li>
                <li>
                  {
                    "Collaborated effectively with back-end developers for seamless API integration."
                  }
                </li>
                <li>
                  {
                    "Contributed to code reviews and knowledge sharing within the development team."
                  }
                </li>
              </ul>
            </div>
          </LinkNewTab>
        </div>
      </div>
    </Fragment>
  );
};

export default Permanent;
