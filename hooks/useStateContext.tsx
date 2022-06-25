import { createContext, ReactNode, useContext, useState } from "react";
import { Answer } from "../types";

const useValue = () => useState<Answer[]>([]);

const StateContext = createContext<ReturnType<typeof useValue> | null>(null);

export const Provider = ({ children }: { children: ReactNode }) => (
  <StateContext.Provider value={useValue()}>{children}</StateContext.Provider>
);

export const useStateContext = () => {
  const contextValue = useContext(StateContext);
  if (contextValue === null) {
    throw new Error("Please use Provider");
  }
  return contextValue;
};
