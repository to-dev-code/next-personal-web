"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { AppLayoutContainerProps, ContentSectionElement } from "./type";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@/app/hooks";
import { sleep } from "@/app/utils/sleep";
import menuList, { Menu } from "@/app/constants/menu";

export const ContentSectionElementContext =
  createContext<ContentSectionElement>(null);

const AppLayoutContainer = ({ render }: AppLayoutContainerProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { showToast } = useToast();
  const [isOpenMenu, setOpenMenu] = useState(true);
  const [history, setHistory] = useState<Menu[]>([]);
  const [contentSectionElement, setContentSectionElement] =
    useState<ContentSectionElement>(null);
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
    sleep(2000).then(() => {
      showToast({
        type: "info",
        content: "This website is under development and some content may be not complete.",
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return render({
    contentSectionElement,
    contentSectionRef,
    menuList,
    isOpenMenu,
    currentPath: menuList.find((menu) => menu.path === pathname)?.path ?? "",
    history: history,
    onCloseTab: removeHistory,
    setOpenMenu,
  });
};

export default AppLayoutContainer;
