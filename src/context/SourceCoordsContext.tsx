import { defaultLocation } from "@/constants";
import { Coordinates, SourceCoordsContextType } from "@/types/coords";
import { createContext } from "react";

export const SourceCoordsContext = createContext<SourceCoordsContextType>({
  srcCoordinates: defaultLocation,
  setSrcCoordinates: (coordinates: Coordinates) => {},
});
