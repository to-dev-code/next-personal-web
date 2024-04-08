import { TMenu } from "../../../config/menu-config";

export type TMenuContext = {
  current?: TMenu;
  history: TMenu[];
  menuList: TMenu[];
  removeHistory: (menu: TMenu) => void;
};
