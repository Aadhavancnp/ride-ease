import { Layer, Source } from "react-map-gl";

type MapBoxRouteProps = {
  coordinates: number[][];
};

export default function MapBoxRoute({ coordinates }: MapBoxRouteProps) {
  return (
    <Source
      type="geojson"
      data={{
        type: "Feature",
        properties: {
          id: "route",
        },
        geometry: {
          type: "LineString",
          coordinates: coordinates,
        },
      }}
    >
      <Layer
        type="line"
        layout={{ "line-join": "round", "line-cap": "square" }}
        paint={{ "line-color": "#000", "line-width": 4 }}
      />
    </Source>
  );
}
