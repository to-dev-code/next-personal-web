export default function Home() {
  return (
    <div className="px-8 pt-8 flex flex-col gap-y-6 h-full">
      <div className="text-5xl text-green-300">{"‘Hi, I'm Sophon.I’;"}</div>
      <div className="text-2xl">
        <span className="text-red-400">{"import "}</span>
        <span className="text-blue-300">{"{"}</span>
        <span className="text-accent">{" front-end, back-end "}</span>
        <span className="text-blue-300">{"} "}</span>
        <span className="text-red-400">{"from "}</span>
        <span className="text-blue-300">{"'software-developer'"}</span>
        <span>{";"}</span>
      </div>
      <div className="text-md">
        <span className="text-red-400">{"const "}</span>
        <span className="text-blue-300">{"lover "}</span>
        <span className="text-red-400">{"= "}</span>
        <span className="text-green-300">
          {
            "'I love coding to make a something that best design, best pattern, best performance, all merging to be best software.'"
          }
        </span>
        <span>{";"}</span>
      </div>
      <div className="text-md">
        <span className="text-red-400">{"export "}</span>
        <span className="text-red-400">{"default "}</span>
        <span className="text-blue-300">{"lover"}</span>
        <span>{";"}</span>
      </div>
    </div>
  );
}
