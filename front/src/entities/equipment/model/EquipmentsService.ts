import { baseUrl } from "@shared/constants";
import {
  ApiService,
  EntitiesService,
  CreateEquipment,
  UpdateEquipment,
  Equipment,
} from "@shared/misc";

class EquipmentsService
  extends EntitiesService<Equipment, CreateEquipment, UpdateEquipment>
  implements ApiService<Equipment, CreateEquipment, UpdateEquipment>
{
  constructor() {
    super(`${baseUrl}/Equipments`);
  }
}

export default EquipmentsService;
