"use client";
import Image from "next/image";
import { carData } from "@/constants";
import { useContext, useState } from "react";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import { getEstimatedCost } from "@/utils";
import { useRouter } from "next/navigation";
import { SelectedCarAmountContext } from "@/context/SelectedCarAmountContext";
import { PaymentContext } from "@/context/PaymentContext";

export default function Cars() {
  const [selectedCar, setSelectedCar] = useState<number>();
  const { directionData } = useContext(DirectionDataContext);
  const { selectedCarAmount, setSelectedCarAmount } = useContext(
    SelectedCarAmountContext,
  );
  const { paymentIntent } = useContext(PaymentContext);
  const router = useRouter();

  function handleCarClick(car: any, index: number) {
    setSelectedCar(index);
    if (directionData?.routes) {
      setSelectedCarAmount(
        Number(getEstimatedCost(car.charges, directionData.routes[0].distance)),
      );
    }
  }
  return (
    <>
      <div className="mt-2">
        <p className="text-[20px] font-bold">Select Car</p>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
          {carData.map((car, index) => (
            <div
              key={car.name}
              className={`m-2 w-[85%] cursor-pointer rounded-md border-2 p-2 transition-all hover:scale-110 hover:border-black ${index === selectedCar ? "border-black" : null}`.trim()}
              onClick={() => handleCarClick(car, index)}
            >
              <Image
                src={car.image}
                width={100}
                height={100}
                alt={car.name}
                className="w-full"
              />
              <h2 className="text-[12px] font-bold text-gray-500">
                {car.name}
                {directionData?.routes && (
                  <span className="float-right font-medium text-black">
                    {getEstimatedCost(
                      car.charges,
                      directionData.routes[0].distance,
                    )}
                    $
                  </span>
                )}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <button
        className={`mt-5 w-full rounded-lg bg-black p-3 font-semibold ${!selectedCarAmount || !paymentIntent ? "pointer-events-none bg-gray-200 text-black" : "text-white"}`}
        type="button"
        disabled={!selectedCarAmount || !paymentIntent}
        onClick={() =>
          router.push(
            `/payment?amount=${selectedCarAmount}&payment_type=${paymentIntent}`,
          )
        }
      >
        Book
      </button>
    </>
  );
}
