import { defaultLocation } from "@/constants";
import { Coordinates, UserLocationContextType } from "@/types/coords";
import { createContext } from "react";

export const UserLocationContext = createContext<UserLocationContextType>({
  userCoordinates: defaultLocation,
  setUserCoordinates: (coordinates: Coordinates) => {},
});
