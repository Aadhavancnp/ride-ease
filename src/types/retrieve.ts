import { Context, ExternalIds, Metadata } from "./search";

export interface AutoCompleteRetrieveResponse {
  type: string;
  features: Feature[];
  attribution: string;
}

interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

interface Properties {
  name: string;
  mapbox_id: string;
  feature_type: string;
  address: string;
  full_address: string;
  place_formatted: string;
  context: Context;
  coordinates: CoordinatesResponse;
  maki: string;
  poi_category: string[];
  poi_category_ids: string[];
  external_ids: ExternalIds;
  metadata: Metadata;
}

interface RoutablePoint {
  name: string;
  latitude: number;
  longitude: number;
}

interface CoordinatesResponse {
  latitude: number;
  longitude: number;
  routable_points: RoutablePoint[];
}

interface Geometry {
  coordinates: number[];
  type: string;
}
