import { Circle, Rectangle } from "../shapes";
import Button from "../button";

const Sidebar = ({ onClick }: SidebarProps) => {
  return (
    <aside>
      <div className="w-max h-full bg-base-200 p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-y-4">
          <Button
            className="p-0 w-fit bg-transparent hover:bg-transparent"
            onClick={onClick}
          >
            <Circle />
          </Button>
          <Button
            className="p-0 w-fit bg-transparent hover:bg-transparent"
            onClick={onClick}
          >
            <Rectangle />
          </Button>
          <Button
            className="p-0 w-fit bg-transparent hover:bg-transparent"
            onClick={onClick}
          >
            <Circle />
          </Button>
          <Button
            className="p-0 w-fit bg-transparent hover:bg-transparent"
            onClick={onClick}
          >
            <Rectangle />
          </Button>
        </div>
        <div className="flex flex-col gap-y-4">
          <Button
            className="p-0 w-fit bg-transparent hover:bg-transparent"
            onClick={onClick}
          >
            <Circle />
          </Button>{" "}
          <Button
            className="p-0 w-fit bg-transparent hover:bg-transparent"
            onClick={onClick}
          >
            <Circle />
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
