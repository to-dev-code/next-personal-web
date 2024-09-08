"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { AppLayoutContainerProps, MainContentContextValue } from "./type";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "@/app/hooks";
import menuList, { Menu } from "@/app/constants/menu";

export const MainContentContext = createContext<MainContentContextValue>(null);

const AppLayoutContainer = ({ render }: AppLayoutContainerProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { toggleTheme } = useTheme();
  const [isOpenMenu, setOpenMenu] = useState(true);
  const [history, setHistory] = useState<Menu[]>([]);
  const [contentSectionElement, setContentSectionElement] =
    useState<MainContentContextValue>(null);
  const contentSectionRef = useRef<HTMLDivElement>(null);

  const appendHistory = (menu: Menu) => {
    setHistory((current) => {
      if (current.includes(menu)) {
        return current;
      }
      return [...current, menu];
    });
  };

  const removeHistory = (menu: Menu) => {
    setHistory((current) => {
      const copied = [...current];
      const index = copied.indexOf(menu);
      if (menu.path === pathname) {
        if (copied[index + 1]) {
          router.push(copied[index + 1].path);
        } else if (copied[index - 1]) {
          router.push(copied[index - 1].path);
        } else {
          router.push("blank");
        }
      }
      copied.splice(index, 1);
      return [...copied];
    });
  };

  useEffect(() => {
    const lastClickedMenu = menuList.find((menu) => menu.path === pathname);
    if (lastClickedMenu) {
      appendHistory(lastClickedMenu);
    }
  }, [pathname]);

  useEffect(() => {
    setContentSectionElement(contentSectionRef.current);
  }, []);

  return render({
    history,
    menuList,
    isOpenMenu,
    contentSectionRef,
    contentSectionElement,
    currentPath: menuList.find((menu) => menu.path === pathname)?.path ?? "",
    onCloseTab: removeHistory,
    toggleTheme,
    setOpenMenu,
  });
};

export default AppLayoutContainer;
