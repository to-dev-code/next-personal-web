import { Rectangle } from "../shapes";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full h-8 bg-primary p-2 relative">
        <Rectangle className="h-6 w-[400px] transform-center rounded-md" />
        <Rectangle className="h-2 w-28 bg-accent transform-center rounded-md" />
        <div className="transform-middle right-2 flex gap-x-4">
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
