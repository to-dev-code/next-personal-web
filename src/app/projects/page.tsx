import { Rectangle } from "../components/common/shapes";
import { v4 as uuidv4 } from "uuid";

export default function ProjectsPage() {
  return (
    <div className="mx-10 my-16 flex flex-col gap-y-16">
      {[0, 0, 0, 0, 0, 0, 0].map((_) => {
        return (
          <div
            key={uuidv4()}
            className="flex bg-gradient-to-b from-secondary rounded-lg"
          >
            <div>
              <Rectangle className="bg-accent w-80 h-40 relative top-[-20px] left-4" />
            </div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
}
