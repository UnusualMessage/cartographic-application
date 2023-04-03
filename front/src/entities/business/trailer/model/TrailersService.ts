import { baseUrl } from "@shared/constants";
import {
  EntitiesService,
  ApiService,
  Trailer,
  CreateTrailer,
  UpdateTrailer,
} from "@shared/misc";

class TrailersService
  extends EntitiesService<Trailer, CreateTrailer, UpdateTrailer>
  implements ApiService<Trailer, CreateTrailer, UpdateTrailer>
{
  constructor() {
    super(`${baseUrl}/Trailers`);
  }
}

export default TrailersService;
