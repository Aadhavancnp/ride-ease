import { PaymentType } from "@/constants";
import { PaymentContextContextType } from "@/types/context";
import { createContext } from "react";

export const PaymentContext = createContext<PaymentContextContextType>({
  paymentIntent: "cash",
  setPaymentIntent: (paymentIntent: PaymentType) => {},
});
