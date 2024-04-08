import { TMenuContainerState } from "@/app/containers/menu-container/type";

export type TMenuProps = Pick<TMenuContainerState, "menuList" | "open">;
