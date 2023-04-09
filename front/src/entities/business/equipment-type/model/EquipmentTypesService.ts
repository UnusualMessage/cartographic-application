import { baseUrl } from "@shared/constants";
import {
  ApiService,
  EntitiesService,
  EquipmentType,
  CreateEquipmentType,
  UpdateEquipmentType,
} from "@shared/misc";

class EquipmentTypesService
  extends EntitiesService<
    EquipmentType,
    CreateEquipmentType,
    UpdateEquipmentType
  >
  implements
    ApiService<EquipmentType, CreateEquipmentType, UpdateEquipmentType>
{
  constructor() {
    super(`${baseUrl}/EquipmentTypes`);
  }
}

export default EquipmentTypesService;
