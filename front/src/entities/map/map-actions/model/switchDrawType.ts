import { measurementLayerId } from "@shared/constants";
import {
  TooltipStore,
  InteractionsStore,
  InteractionType,
  LayersService,
} from "@shared/misc";

export const switchDrawType = (
  currentType: InteractionType,
  targetType: InteractionType
) => {
  LayersService.clearVectorLayer(measurementLayerId);
  TooltipStore.hide();

  if (currentType === targetType) {
    InteractionsStore.type = "none";
  } else {
    InteractionsStore.type = targetType;
  }
};
