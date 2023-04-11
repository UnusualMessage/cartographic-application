import { GeocoderFeature } from "@shared/misc";

class GeocoderService {
  private _url: string;

  constructor() {
    this._url =
      "https://api.geotree.ru/address.php?term={input}&key=szamXVpxLLrV";
  }

  public async getLocation(input: string) {
    const response = await fetch(this._url.replace("{input}", input));
    const data = await response.json();

    return data as GeocoderFeature[];
  }
}

export default GeocoderService;
