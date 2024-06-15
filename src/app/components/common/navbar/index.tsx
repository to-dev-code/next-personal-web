import { Rectangle } from "../shapes";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  return (
    <nav>
      <div className="h-10 bg-primary p-2 flex">
        <div className="flex-1" />
        <div className="relative flex-1">
          <Rectangle className="h-6 w-full transform-center rounded-md" />
          <Rectangle className="h-2 w-28 bg-accent transform-center rounded-md" />
        </div>
        <div className="flex gap-x-4 flex-1 justify-end">
          {[0, 0, 0, 0].map((_) => (
            <Rectangle
              key={uuidv4()}
              className="h-6 w-6 bg-accent rounded-md"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
