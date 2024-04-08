import { v4 as uuidv4 } from "uuid";
import { Rectangle } from "../shapes";
import { TMenuProps } from "./type";
import Icon from "../icon";
import Link from "next/link";

const MenuDrawer = ({ open, menuList }: TMenuProps) => {
  return (
    <div
      className={`${open ? "w-80" : "w-0"} transition-[width] ease-in-out h-full bg-neutral`}
    >
      <div
        className={`${open ? "visible" : "hidden"} h-full transition-[width] flex flex-col justify-between`}
      >
        <div>
          <div className="h-12 relative">
            <Rectangle className="h-2 w-28 bg-accent transform-middle left-2 rounded-md" />
          </div>
          <div className="bg-primary h-8"></div>
          <div className="py-2 text-white">
            <div className="text-2xl px-2">Menu</div>
            <ul className="menu rounded-box">
              {menuList.map((menu) => {
                return (
                  <li key={uuidv4()}>
                    <Link href={menu.path}>
                      <Icon name={"file"} />
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

export default MenuDrawer;
