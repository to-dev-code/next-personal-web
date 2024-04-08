import { TTabProps } from "@/app/components/common/tab/type";
import { TAppContainer } from "@/app/models/common";

export type TTabContainerProps = TAppContainer<
  Pick<TTabProps, "tabs" | "currentPath" | 'onCloseTab'>
>;
