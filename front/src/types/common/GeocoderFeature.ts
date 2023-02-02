import { Feature } from "@turf/turf";

export default interface GeocoderFeature extends Feature {
  place_name: string;
}
