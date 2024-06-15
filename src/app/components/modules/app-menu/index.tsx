import { v4 as uuidv4 } from "uuid";
import { Rectangle } from "../../common/shapes";
import { AppMenuProps } from "./type";
import Icon from "../../common/icon";
import Link from "next/link";

const AppMenu = ({ isOpenMenu, menuList }: AppMenuProps) => {
  return (
    <div className={`${isOpenMenu ? "visible" : "hidden"} h-full bg-neutral`}>
      <div
        className={`${
          isOpenMenu ? "visible" : "hidden"
        } w-80 h-full flex flex-col justify-between`}
      >
        <div>
          <div className="h-12 relative">
            <Rectangle className="h-2 w-28 bg-accent transform-middle left-2 rounded-md" />
          </div>
          <div className="bg-primary h-8"></div>
          <div className="py-2">
            <div className="text-xl px-2">{"MY PERSONAL"}</div>
            <ul className="menu rounded-box">
              {menuList.map((menu) => {
                return (
                  <li key={uuidv4()}>
                    <Link href={menu.path}>
                      <Icon name={"file"} strokeColor="#ffffff" />
                      {menu.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col h-32 gap-y-2">
          <div className="bg-primary h-6 relative">
            <Rectangle className="h-2 w-28 bg-accent transform-middle left-2 rounded-md" />
          </div>
          <div className="bg-primary h-6 relative">
            <Rectangle className="h-2 w-28 bg-accent transform-middle left-2 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMenu;
