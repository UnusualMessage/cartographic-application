import { baseUrl } from "@shared/constants";
import {
  EntitiesService,
  ApiService,
  Speed,
  CreateSpeed,
  UpdateSpeed,
} from "@shared/misc";

class SpeedsService
  extends EntitiesService<Speed, CreateSpeed, UpdateSpeed>
  implements ApiService<Speed, CreateSpeed, UpdateSpeed>
{
  constructor() {
    super(`${baseUrl}/Speeds`);
  }
}

export default SpeedsService;
