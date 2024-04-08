import Icon from "./components/common/icon";

export default function NotFoundPage({}) {
  return (
    <div className="h-full relative">
      <div className="transform-center">
        <div className="flex gap-x-2">
          <Icon name={"info"} />
          <span>{"Page not found | Please choose a menu"}</span>
        </div>
      </div>
    </div>
  );
}
