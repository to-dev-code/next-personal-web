import { Rectangle } from "@/app/components/common/shapes";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="mx-10 my-16 flex flex-col gap-y-16 relative">
      {[0].map((_) => {
        return (
          <Link
            href={""}
            key={uuidv4()}
            className="flex bg-gradient-to-b from-secondary hover:bg-secondary rounded-lg cursor-pointer transition-all duration-200"
          >
            <Rectangle className="bg-accent w-80 h-40 relative top-[-20px] left-4" />
          </Link>
        );
      })}
    </div>
  );
}
