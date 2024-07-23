import { TechnicalSkillsSectionProps } from "./type";
import Image from "next/image";
import Tooltip from "@/app/components/common/tooltip";
import LinkNewTab from "@/app/components/common/link";

const TechnicalSkillsSection = ({
  technicalSkills: { id, ref },
}: TechnicalSkillsSectionProps) => {
  return (
    <div id={id} ref={ref}>
      <div className="rounded-box flex bg-[#191e24] min-w-fit gap-y-8 p-10 flex flex-col">
        <div>
          <div className="text-xl mb-4">{"Programming languages"}</div>
          <div className="flex flex-wrap gap-x-6 items-center">
            <Tooltip direction={"bottom"} content="HTML 5">
              <Image
                src={"/assets/vector/html-5.svg"}
                alt={"html-5-logo"}
                className="pt-1"
                width={60}
                height={60}
              />
            </Tooltip>
            <Tooltip direction={"bottom"} content="CSS 3">
              <Image
                src={"/assets/vector/css-3.svg"}
                alt={"css-3-logo"}
                width={60}
                height={60}
              />
            </Tooltip>
            <Tooltip direction={"bottom"} content="JavaScript">
              <Image
                src={"/assets/vector/javascript.svg"}
                alt={"javascript-logo"}
                width={50}
                height={50}
              />
            </Tooltip>
            <LinkNewTab
              href={"https://www.typescriptlang.org/"}
              className="pt-1"
            >
              <Tooltip direction={"bottom"} content={"TypeScript"}>
                <Image
                  src={"/assets/vector/typescript.svg"}
                  alt={"typescript-logo"}
                  width={50}
                  height={50}
                />
              </Tooltip>
            </LinkNewTab>
          </div>
        </div>
        <div>
          <div className="text-xl mb-4">{"Web frameworks & Libraries"}</div>
          <div className="flex flex-wrap gap-x-6 items-center">
            <LinkNewTab href={"https://react.dev/"}>
              <Tooltip direction={"bottom"} content={"React"}>
                <Image
                  src={"/assets/vector/react.svg"}
                  alt={"react-logo"}
                  width={60}
                  height={60}
                />
              </Tooltip>
            </LinkNewTab>
            <LinkNewTab href={"https://nextjs.org/"}>
              <Tooltip direction={"bottom"} content={"NextJs"}>
                <Image
                  src={"/assets/vector/nextjs.svg"}
                  alt={"next-logo"}
                  width={100}
                  height={100}
                />
              </Tooltip>
            </LinkNewTab>
            <LinkNewTab href={"https://angular.dev/"}>
              <Tooltip direction={"bottom"} content={"Angular"}>
                <Image
                  src={"/assets/vector/angular.svg"}
                  alt={"angular-logo"}
                  width={55}
                  height={55}
                />
              </Tooltip>
            </LinkNewTab>
            <LinkNewTab href={"https://expressjs.com/"}>
              <Tooltip direction={"bottom"} content={"Express"}>
                <Image
                  src={"/assets/vector/express.svg"}
                  alt={"express-logo"}
                  width={60}
                  height={60}
                />
              </Tooltip>
            </LinkNewTab>
            <LinkNewTab href={"https://redux-toolkit.js.org/"}>
              <Tooltip direction={"bottom"} content={"Redux toolkit"}>
                <Image
                  src={"/assets/vector/redux.svg"}
                  alt={"redux-toolkit-logo"}
                  width={55}
                  height={55}
                />
              </Tooltip>
            </LinkNewTab>
            <LinkNewTab href={"https://getbootstrap.com/"}>
              <Tooltip direction={"bottom"} content={"Bootstrap 4"}>
                <Image
                  src={"/assets/vector/bootstrap.svg"}
                  alt={"bootstrap-logo"}
                  width={60}
                  height={60}
                />
              </Tooltip>
            </LinkNewTab>
            <LinkNewTab href={"https://daisyui.com/"}>
              <Tooltip direction={"bottom"} content={"Daisy UI"}>
                <Image
                  src={"/assets/vector/daisyui.svg"}
                  alt={"daisyui-logo"}
                  width={60}
                  height={60}
                />
              </Tooltip>
            </LinkNewTab>
            <LinkNewTab href={"https://tailwindcss.com/"}>
              <Tooltip direction={"bottom"} content={"Tailwind"}>
                <Image
                  src={"/assets/vector/tailwind.svg"}
                  alt={"tailwind-logo"}
                  width={70}
                  height={70}
                />
              </Tooltip>
            </LinkNewTab>
            <LinkNewTab href={"https://emotion.sh/docs/introduction"}>
              <Tooltip
                direction={"bottom"}
                content={"Emotion"}
                className="relative w-14 h-14"
              >
                <Image
                  src={"/assets/image/emotion.png"}
                  alt={"emotion-logo"}
                  fill
                />
              </Tooltip>
            </LinkNewTab>
            <LinkNewTab href={"https://www.highcharts.com/"}>
              <Tooltip direction={"bottom"} content={"Highcharts"}>
                <Image
                  src={"/assets/vector/highcharts.svg"}
                  alt={"highcharts-logo"}
                  width={75}
                  height={75}
                />
              </Tooltip>
            </LinkNewTab>
          </div>
        </div>
        <div>
          <div className="text-xl mb-4">{"Environments & Databases"}</div>
          <div className="flex flex-wrap gap-x-6 items-center">
            <LinkNewTab href={"https://nodejs.org/en"}>
              <Image
                src={"/assets/vector/nodejs.svg"}
                alt={"nodejs-logo"}
                width={90}
                height={90}
              />
            </LinkNewTab>
            <LinkNewTab href={"https://www.docker.com/"}>
              <Image
                src={"/assets/vector/docker.svg"}
                alt={"docker-logo"}
                width={140}
                height={140}
              />
            </LinkNewTab>
            <LinkNewTab href={"https://www.mongodb.com/"}>
              <Image
                src={"/assets/vector/mgdb.svg"}
                alt={"mongoDB-logo"}
                width={140}
                height={140}
              />
            </LinkNewTab>
          </div>
        </div>
        <div>
          <div className="text-xl mb-4">{"Version control"}</div>
          <div className="flex flex-wrap gap-x-6 items-center">
            <LinkNewTab href={"https://www.git-scm.com/"}>
              <Tooltip direction={"bottom"} content={"Git"}>
                <Image
                  src={"/assets/vector/git.svg"}
                  alt={"git-logo"}
                  width={55}
                  height={55}
                />
              </Tooltip>
            </LinkNewTab>
            <LinkNewTab href={"https://about.gitlab.com/"}>
              <Tooltip direction={"bottom"} content={"Gitlab"}>
                <Image
                  src={"/assets/vector/gitlab.svg"}
                  alt={"gitlab-logo"}
                  width={60}
                  height={60}
                />
              </Tooltip>
            </LinkNewTab>
            <LinkNewTab href={"https://github.com/"}>
              <Tooltip direction={"bottom"} content={"Github"}>
                <Image
                  src={"/assets/vector/github.svg"}
                  alt={"github-logo"}
                  width={45}
                  height={45}
                />
              </Tooltip>
            </LinkNewTab>
            <LinkNewTab href={"https://bitbucket.org/"}>
              <Tooltip direction={"bottom"} content={"Bitbucket"}>
                <Image
                  src={"/assets/vector/bitbucket.svg"}
                  alt={"bitbucket-logo"}
                  width={60}
                  height={60}
                />
              </Tooltip>
            </LinkNewTab>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillsSection;
