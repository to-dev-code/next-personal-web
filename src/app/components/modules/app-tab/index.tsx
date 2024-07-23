import { v4 as uuidv4 } from "uuid";
import { Circle } from "../../common/shapes";
import { AppTabProps } from "./type";
import cn from "@/app/utils/cn";
import Link from "next/link";
import Icon from "../../common/icon";

const AppTab = ({ currentPath, history, onCloseTab }: AppTabProps) => {
  return (
    <div
      role="tablist"
      className="tabs tabs-lifted tabs-lg bg-neutral flex justify-between items-center"
    >
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
      <div className="dropdown dropdown-end z-20">
        <button
          type="button"
          tabIndex={0}
          role="button"
          className="mx-4 text-2xl"
        >
          {"•••"}
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-2 shadow"
        >
          <li>
            <a>
              <label className="swap">
                <input type="checkbox" />
                <div className="swap-on flex items-center gap-2">
                  <Icon width={25} height={25} name={"sun"} />
                  <span>{"Light"}</span>
                </div>
                <div className="swap-off flex items-center gap-2">
                  <Icon width={25} height={25} name={"moon"} />
                  <span>{"Dark"}</span>
                </div>
              </label>
            </a>
          </li>
          <li>
            <div className="join gap-0 p-0">
              <input
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="TH"
              />
              <input
                className="join-item btn"
                type="radio"
                name="options"
                aria-label="EN"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppTab;
