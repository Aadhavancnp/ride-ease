export interface AutoCompleteResponse {
  suggestions: Suggestion[];
  attribution: string;
  response_id: string;
}

export interface Suggestion {
  name: string;
  mapbox_id: string;
  feature_type: string;
  address: string;
  full_address: string;
  place_formatted: string;
  context: Context;
  language: string;
  maki: string;
  poi_category: string[];
  poi_category_ids: string[];
  external_ids: ExternalIds;
  metadata: Metadata;
}

export interface Context {
  country: Country;
  region: Region;
  postcode: Postcode;
  place: Place;
  neighborhood: Neighborhood;
  street: Street;
}

interface Country {
  name: string;
  country_code: string;
  country_code_alpha_3: string;
}

interface Region {
  name: string;
  region_code: string;
  region_code_full: string;
}

interface Postcode {
  name: string;
}

interface Place {
  name: string;
}

interface Neighborhood {
  name: string;
}

interface Street {
  name: string;
}

export interface ExternalIds {
  safegraph: string;
  foursquare: string;
}

export interface Metadata {}
