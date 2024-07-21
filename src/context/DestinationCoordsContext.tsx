import { defaultLocation } from "@/constants";
import { Coordinates, DestinationCoordsContextType } from "@/types/coords";
import { createContext } from "react";

export const DestinationCoordsContext =
  createContext<DestinationCoordsContextType>({
    destCoordinates: defaultLocation,
    setDestCoordinates: (coordinates: Coordinates) => {},
  });
