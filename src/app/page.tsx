"use client";
import Cards from "@/components/home/Cards";
import MapBoxSection from "@/components/home/MapBoxSection";
import SearchSection from "@/components/home/SearchSection";
import { PaymentType } from "@/constants";
import { DestinationCoordsContext } from "@/context/DestinationCoordsContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import { PaymentContext } from "@/context/PaymentContext";
import { SelectedCarAmountContext } from "@/context/SelectedCarAmountContext";
import { SourceCoordsContext } from "@/context/SourceCoordsContext";
import { UserLocationContext } from "@/context/UserLocationContext";
import { Coordinates } from "@/types/coords";
import { DirectionResult } from "@/types/directions";
import { useEffect, useState } from "react";

export default function Home() {
  const [userCoordinates, setUserCoordinates] = useState<Coordinates>();
  const [srcCoordinates, setSrcCoordinates] = useState<Coordinates>();
  const [destCoordinates, setDestCoordinates] = useState<Coordinates>();
  const [directionData, setDirectionData] = useState<DirectionResult>();
  const [selectedCarAmount, setSelectedCarAmount] = useState<number>();
  const [paymentIntent, setPaymentIntent] = useState<PaymentType>();

  useEffect(() => {
    getUserLocation();
  }, []);

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }

  return (
    <div className="grid grid-cols-1 gap-5 p-6 pt-2 md:grid-cols-3">
      <UserLocationContext.Provider
        value={{ userCoordinates, setUserCoordinates }}
      >
        <SourceCoordsContext.Provider
          value={{ srcCoordinates, setSrcCoordinates }}
        >
          <DestinationCoordsContext.Provider
            value={{ destCoordinates, setDestCoordinates }}
          >
            <DirectionDataContext.Provider
              value={{ directionData, setDirectionData }}
            >
              <SelectedCarAmountContext.Provider
                value={{ selectedCarAmount, setSelectedCarAmount }}
              >
                <PaymentContext.Provider
                  value={{ paymentIntent, setPaymentIntent }}
                >
                  <div className="max-h-screen">
                    <SearchSection />
                  </div>
                  <div className="col-span-2">
                    <MapBoxSection />
                    <Cards />
                  </div>
                </PaymentContext.Provider>
              </SelectedCarAmountContext.Provider>
            </DirectionDataContext.Provider>
          </DestinationCoordsContext.Provider>
        </SourceCoordsContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
}
