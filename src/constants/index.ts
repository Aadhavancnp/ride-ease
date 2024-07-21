import { Coordinates } from "@/types/coords";

export const carData = [
  {
    name: "Taxi",
    image: "/standard_taxi.png",
    charges: 1,
  },
  {
    name: "Minivan",
    image: "/minivan.png",
    charges: 1.25,
  },
  {
    name: "SUV",
    image: "/suv.png",
    charges: 1.75,
  },
  {
    name: "Sedan",
    image: "/sedan.png",
    charges: 2,
  },
  {
    name: "Electric",
    image: "/electric.png",
    charges: 2.5,
  },
  {
    name: "Luxury",
    image: "/luxury.png",
    charges: 3,
  },
];

export const paymentMethods = [
  {
    name: "Visa",
    image: "/visa.png",
    paymentType: "visa",
  },
  {
    name: "MasterCard",
    image: "/mastercard.png",
    paymentType: "mastercard",
  },
  {
    name: "American Express",
    image: "/american-express.png",
    paymentType: "american-express",
  },
  {
    name: "Paypal",
    image: "/paypal.png",
    paymentType: "paypal",
  },
  {
    name: "Apple Pay",
    image: "/apple-pay.png",
    paymentType: "apple-pay",
  },
  {
    name: "Google Pay",
    image: "/google-pay.png",
    paymentType: "google-pay",
  },
  {
    name: "Cash",
    image: "/cash.png",
    paymentType: "cash",
  },
];

export const defaultLocation: Coordinates = {
  latitude: 37.7749,
  longitude: -122.4194,
};

export type PaymentType =
  | "cash"
  | "visa"
  | "mastercard"
  | "american-express"
  | "paypal"
  | "apple-pay"
  | "google-pay";
