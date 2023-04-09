import { baseUrl } from "@shared/constants";
import {
  ApiService,
  EntitiesService,
  Geozone,
  CreateGeozone,
  UpdateGeozone,
} from "@shared/misc";

class GeozonesService
  extends EntitiesService<Geozone, CreateGeozone, UpdateGeozone>
  implements ApiService<Geozone, CreateGeozone, UpdateGeozone>
{
  constructor() {
    super(`${baseUrl}/Geozones`);
  }
}

export default GeozonesService;
