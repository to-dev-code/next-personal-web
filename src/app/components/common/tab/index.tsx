import { v4 as uuidv4 } from "uuid";
import { Circle } from "../shapes";
import { TTabProps } from "./type";
import cn from "@/app/utils/cn";
import Link from "next/link";
import Icon from "../icon";

const TabGroup = ({ currentPath, tabs, onCloseTab }: TTabProps) => {
  return (
    <div role="tablist" className="tabs tabs-lifted tabs-lg bg-neutral">
      <div className="w-max">
        {tabs.map((tab) => (
          <Link
            key={uuidv4()}
            href={tab.path}
            role="tab"
            className={cn(
              "tab text-sm w-40 px-2 gap-x-2 !justify-between !rounded-none before:content-none",
              tab.path === currentPath
                ? "bg-primary !border-t-2 !border-t-error"
                : ""
            )}
          >
            <div className="flex gap-x-2">
              <Circle className="bg-accent w-6 h-6" />
              <span>{tab.name}</span>
            </div>
            <Icon
              name={"close"}
              onClick={(e) => {
                e.preventDefault();
                onCloseTab(tab);
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabGroup;
