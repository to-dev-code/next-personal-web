import { Circle, Rectangle } from "../shapes";
import { SidebarProps } from "./type";

const Sidebar = ({ onClickShape }: SidebarProps) => {
  return (
    <aside>
      <div className="w-max h-full bg-primary p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-y-4">
          <button onClick={onClickShape}>
            <Circle />
          </button>
          <button onClick={onClickShape}>
            <Rectangle />
          </button>
          <button onClick={onClickShape}>
            <Circle />
          </button>
          <button onClick={onClickShape}>
            <Rectangle />
          </button>
        </div>
        <div className="flex flex-col gap-y-4">
          <button onClick={onClickShape}>
            <Circle />
          </button>{" "}
          <button onClick={onClickShape}>
            <Circle />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
