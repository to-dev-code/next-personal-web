import { v4 as uuidv4 } from "uuid";
import { Circle } from "../common/shapes";
import { AppTabProps } from "./type";
import cn from "@/app/utils/cn";
import Link from "next/link";
import Icon from "../common/icon";

const AppTab = ({ currentPath, history, onCloseTab }: AppTabProps) => {
  return (
    <div role="tablist" className="tabs tabs-lifted tabs-lg bg-neutral">
      <div className="w-max">
        {history.map((h) => (
          <Link
            key={uuidv4()}
            href={h.path}
            role="tab"
            className={cn(
              "tab text-sm w-40 px-2 gap-x-2 !justify-between !rounded-none before:content-none",
              h.path === currentPath
                ? "bg-primary !border-t-2 !border-t-error"
                : ""
            )}
          >
            <div className="flex gap-x-2">
              <Circle className="bg-accent w-6 h-6" />
              <span>{h.name}</span>
            </div>
            <Icon
              name={"cross"}
              fillColor="#ffffff"
              onClick={(e) => {
                e.preventDefault();
                onCloseTab(h);
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppTab;
