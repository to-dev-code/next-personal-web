import { Circle, Rectangle } from "../shapes";
import { TSidebarProps } from "./type";

const Sidebar = ({ onClickAnyShape }: TSidebarProps) => {
  return (
    <aside>
      <div className="w-max h-full bg-primary p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-y-4">
          <button onClick={onClickAnyShape}>
            <Circle />
          </button>
          <button onClick={onClickAnyShape}>
            <Rectangle />
          </button>
          <button onClick={onClickAnyShape}>
            <Circle />
          </button>
          <button onClick={onClickAnyShape}>
            <Rectangle />
          </button>
        </div>
        <div className="flex flex-col gap-y-4">
          <button onClick={onClickAnyShape}>
            <Circle />
          </button>{" "}
          <button onClick={onClickAnyShape}>
            <Circle />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
