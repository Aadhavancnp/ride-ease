import { DirectionDataContext } from "@/context/DirectionDataContext";
import { useContext } from "react";

export default function DistanceTime() {
  const { directionData } = useContext(DirectionDataContext);
  return (
    <>
      {directionData?.routes && (
        <div className="rounded-lg bg-black p-4 text-white">
          <h2 className="text-[15px]">
            Distance:{" "}
            <span className="mr-3 font-bold">
              {(directionData?.routes[0]?.distance * 0.0005).toFixed(2)} Miles
            </span>
            Duration:{" "}
            <span className="font-bold">
              {(directionData?.routes[0]?.duration / 60).toFixed(2)} Min
            </span>
          </h2>
        </div>
      )}
    </>
  );
}
