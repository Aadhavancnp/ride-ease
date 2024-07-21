import { SelectedCarAmountContextType } from "@/types/context";
import { createContext } from "react";

export const SelectedCarAmountContext =
  createContext<SelectedCarAmountContextType>({
    selectedCarAmount: 0,
    setSelectedCarAmount: (amount: number) => {},
  });
