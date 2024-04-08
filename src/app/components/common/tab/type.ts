import { TMenu } from "@/app/config/menu-config";

export type TTabProps = {
  tabs: TMenu[];
  currentPath: string;
  onCloseTab: (menu: TMenu) => void
};
