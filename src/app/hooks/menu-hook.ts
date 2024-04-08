import { useContext } from "react";
import { MenuContext } from "../components/providers/menu-provider";

export const useMenu = () => useContext(MenuContext);
