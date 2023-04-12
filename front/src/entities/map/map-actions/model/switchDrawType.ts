import { measurementLayerId } from "@shared/constants";
import {
  TooltipStore,
  InteractionsStore,
  Interactions,
  LayersService,
} from "@shared/misc";

export const switchDrawType = (
  currentType: Interactions,
  targetType: Interactions
) => {
  LayersService.clearVectorLayer(measurementLayerId);
  TooltipStore.hide();

  if (currentType === targetType) {
    InteractionsStore.type = Interactions.none;
  } else {
    InteractionsStore.type = targetType;
  }
};
