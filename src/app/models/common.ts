import { ReactNode } from "react";

export type AppContainer<StateType = {}> = {
  render: (state: StateType) => ReactNode;
};

export type ClassNameProp = {
  className?: string;
};
