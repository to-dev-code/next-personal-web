"use client";
import { useMenu } from "@/app/hooks/menu-hook";
import { TTabContainerProps } from "./type";

const TabsContainer = ({ render }: TTabContainerProps) => {
  const { history, current, removeHistory } = useMenu();

  return render({
    currentPath: current?.path ?? "",
    tabs: history,
    onCloseTab: removeHistory,
  });
};

export default TabsContainer;
