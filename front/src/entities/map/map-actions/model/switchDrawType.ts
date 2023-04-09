import { measurementLayerId } from "@shared/constants";
import {
  LayersStore,
  TooltipStore,
  InteractionsStore,
  InteractionType,
} from "@shared/misc";

export const switchDrawType = (
  currentType: InteractionType,
  targetType: InteractionType
) => {
  LayersStore.clearVectorLayer(measurementLayerId);
  TooltipStore.hide();

  if (currentType === targetType) {
    InteractionsStore.type = "none";
  } else {
    InteractionsStore.type = targetType;
  }
};
