export interface DirectionResult {
  routes: Route[];
  waypoints: Waypoint[];
  code: string;
  uuid: string;
}

interface Route {
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
  legs: Leg[];
  geometry: Geometry;
}

interface Leg {
  via_waypoints: any[];
  annotation: Annotation;
  admins: Admin[];
  weight: number;
  duration: number;
  steps: any[];
  distance: number;
  summary: string;
}

interface Annotation {
  distance: number[];
  duration: number[];
}

interface Admin {
  iso_3166_1_alpha3: string;
  iso_3166_1: string;
}

interface Geometry {
  coordinates: number[][];
  type: string;
}

interface Waypoint {
  distance: number;
  name: string;
  location: number[];
}
