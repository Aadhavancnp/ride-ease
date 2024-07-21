import { DirectionDataContextType } from "@/types/coords";
import { DirectionResult } from "@/types/directions";
import { createContext } from "react";

export const DirectionDataContext = createContext<DirectionDataContextType>({
  directionData: undefined,
  setDirectionData: (data: DirectionResult) => {},
});
