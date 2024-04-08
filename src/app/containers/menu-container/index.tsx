import { useState } from "react";
import { TMenuContainerProps } from "./type";
import { useMenu } from "@/app/hooks/menu-hook";

const MenuContainer = ({ render }: TMenuContainerProps) => {
  const { menuList } = useMenu();
  const [open, setOpen] = useState(true);

  return render({ menuList, open, setOpen });
};

export default MenuContainer;
