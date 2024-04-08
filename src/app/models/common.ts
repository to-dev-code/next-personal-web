import { ReactNode } from "react";

export type TAppContainer<StateType = {}> = {
  render: (state: StateType) => ReactNode;
};
