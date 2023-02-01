import { FeatureCollection } from "@turf/turf";

import { GeocoderFeature } from "../../../shared/api/types/common";

class GeocoderService {
  private _url: string;

  constructor() {
    this._url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?limit=5&proximity=ip&access_token=pk.eyJ1Ijoia2FsYWlpaW5pazBiIiwiYSI6ImNsN3VndmVtYzAxbGszd21neTVsNmI1aWMifQ.fZDJEj1NljvZROjGkXarUQ";
  }

  public async getLocation(input: string) {
    const response = await fetch(this._url.replace("{input}", input));
    const data = (await response.json()) as FeatureCollection;

    return data.features as GeocoderFeature[];
  }
}

export default GeocoderService;
