import { baseUrl } from "@shared/constants";
import {
  ApiService,
  EntitiesService,
  Mounted,
  CreateMounted,
  UpdateMounted,
} from "@shared/misc";

class MountedsService
  extends EntitiesService<Mounted, CreateMounted, UpdateMounted>
  implements ApiService<Mounted, CreateMounted, UpdateMounted>
{
  constructor() {
    super(`${baseUrl}/Mounteds`);
  }
}

export default MountedsService;
