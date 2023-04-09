import { Feature } from "@turf/turf";

export interface GeocoderFeature extends Feature {
  place_name: string;
}
