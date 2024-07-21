"use client";
import { UserLocationContext } from "@/context/UserLocationContext";
import { useContext, useEffect, useRef } from "react";
import Map, { MapRef, NavigationControl } from "react-map-gl";
import Markers from "./Markers";
import { SourceCoordsContext } from "@/context/SourceCoordsContext";
import { DestinationCoordsContext } from "@/context/DestinationCoordsContext";
import { DirectionResult } from "@/types/directions";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import MapBoxRoute from "./MapBoxRoute";
import DistanceTime from "./DistanceTime";

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function GoogleMapSection() {
  const mapRef = useRef<MapRef>(null);
  const { userCoordinates } = useContext(UserLocationContext);
  const { srcCoordinates } = useContext(SourceCoordsContext);
  const { destCoordinates } = useContext(DestinationCoordsContext);
  const { directionData, setDirectionData } = useContext(DirectionDataContext);

  useEffect(() => {
    if (srcCoordinates) {
      mapRef.current?.flyTo({
        center: [srcCoordinates.longitude, srcCoordinates.latitude],
        duration: 2500,
      });
    }
  }, [srcCoordinates]);

  useEffect(() => {
    if (destCoordinates) {
      mapRef.current?.flyTo({
        center: [destCoordinates.longitude, destCoordinates.latitude],
        duration: 2500,
      });
    }

    if (destCoordinates && srcCoordinates) {
      getDirectionRoute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destCoordinates]);

  async function getDirectionRoute() {
    const src = `${srcCoordinates?.longitude},${srcCoordinates?.latitude}`;
    const dst = `${destCoordinates?.longitude},${destCoordinates?.latitude}`;
    const url = `/api/get-directions?src=${src}&dst=${dst}`;
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    });
    const data = await res.json();
    if (!data) return;
    const directionResult: DirectionResult = data.data;
    // console.log(directionResult);
    setDirectionData(directionResult);
  }
  return (
    <div className="p-5">
      <div className="overflow-hidden rounded-lg">
        {userCoordinates && (
          <Map
            ref={mapRef}
            mapboxAccessToken={MAPBOX_API_KEY}
            initialViewState={{
              longitude: userCoordinates.longitude,
              latitude: userCoordinates.latitude,
              zoom: 14,
            }}
            style={{ width: "100%", height: 435, borderRadius: 10 }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
          >
            <Markers />
            <NavigationControl />
            {directionData?.routes && (
              <MapBoxRoute
                coordinates={directionData.routes[0].geometry.coordinates}
              />
            )}
          </Map>
        )}
      </div>
      <div className="hiddenmd:block absolute bottom-[157px] right-[50px] z-20">
        <DistanceTime />
      </div>
    </div>
  );
}
