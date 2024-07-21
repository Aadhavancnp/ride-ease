import { PaymentType } from "@/constants";
import { Coordinates } from "./coords";
import { DirectionResult } from "./directions";

export type UserLocationContextType = {
  userCoordinates: Coordinates | undefined;
  setUserCoordinates: (coordinates: Coordinates) => void;
};

export type SourceCoordsContextType = {
  srcCoordinates: Coordinates | undefined;
  setSrcCoordinates: (coordinates: Coordinates) => void;
};

export type DestinationCoordsContextType = {
  destCoordinates: Coordinates | undefined;
  setDestCoordinates: (coordinates: Coordinates) => void;
};

export type DirectionDataContextType = {
  directionData: DirectionResult | undefined;
  setDirectionData: (data: DirectionResult) => void;
};

export type SelectedCarAmountContextType = {
  selectedCarAmount: number | undefined;
  setSelectedCarAmount: (amount: number) => void;
};

export type PaymentContextContextType = {
  paymentIntent: PaymentType | undefined;
  setPaymentIntent: (intent: PaymentType) => void;
};
