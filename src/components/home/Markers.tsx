import { Marker } from "react-map-gl";
import Image from "next/image";
import { useContext } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import { DestinationCoordsContext } from "@/context/DestinationCoordsContext";
import { SourceCoordsContext } from "@/context/SourceCoordsContext";

export default function Markers() {
  const { userCoordinates } = useContext(UserLocationContext);
  const { srcCoordinates } = useContext(SourceCoordsContext);
  const { destCoordinates } = useContext(DestinationCoordsContext);
  return (
    <div>
      {!srcCoordinates && !destCoordinates && userCoordinates && (
        <Marker
          longitude={userCoordinates.longitude}
          latitude={userCoordinates.latitude}
          anchor="bottom"
        >
          <Image
            alt="Pin"
            src="/pin.png"
            width={25}
            height={25}
            className="h-10 w-10"
          />
        </Marker>
      )}
      {srcCoordinates && (
        <Marker
          longitude={srcCoordinates.longitude}
          latitude={srcCoordinates.latitude}
          anchor="bottom"
        >
          <Image
            alt="Pin"
            src="/pin.png"
            width={25}
            height={25}
            className="h-10 w-10"
          />
        </Marker>
      )}
      {destCoordinates && (
        <Marker
          longitude={destCoordinates.longitude}
          latitude={destCoordinates.latitude}
          anchor="bottom"
        >
          <Image
            alt="Pin"
            src="/pin.png"
            width={25}
            height={25}
            className="h-10 w-10"
          />
        </Marker>
      )}
    </div>
  );
}
