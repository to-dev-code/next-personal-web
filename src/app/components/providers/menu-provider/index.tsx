"use client";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { TMenuContext } from "./type";
import { usePathname, useRouter } from "next/navigation";
import menuList, { TMenu } from "../../../config/menu-config";

export const MenuContext = createContext<TMenuContext>({
  current: undefined,
  history: [],
  menuList: [],
  removeHistory: () => {},
});

const MenuProvider = ({ children }: PropsWithChildren) => {
  const [history, setHistory] = useState<TMenu[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const appendHistory = (menu: TMenu) => {
    setHistory((current) => {
      if (current.includes(menu)) {
        return current;
      }
      return [...current, menu];
    });
  };

  const removeHistory = (menu: TMenu) => {
    setHistory((current) => {
      const copied = [...current];
      const index = copied.indexOf(menu);
      if (menu.path === pathname) {
        if (copied[index + 1]) {
          router.push(copied[index + 1].path);
        } else if (copied[index - 1]) {
          router.push(copied[index - 1].path);
        } else {
          router.push("welcome");
        }
      }
      copied.splice(index, 1);
      return [...copied];
    });
  };

  useEffect(() => {
    // Append new menu path to history.
    const initMenu = menuList.find((menu) => menu.path === pathname);
    if (initMenu) {
      appendHistory(initMenu);
    }
  }, [pathname]);

  return (
    <MenuContext.Provider
      value={{
        current: menuList.find((menu) => menu.path === pathname),
        menuList: menuList,
        history,
        removeHistory,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
