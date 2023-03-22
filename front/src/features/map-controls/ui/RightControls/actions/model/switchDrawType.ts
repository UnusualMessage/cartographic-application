import { measurementLayerId } from "@shared/constants";
import {
  DrawType,
  LayersStore,
  TooltipStore,
  InteractionsStore,
} from "@shared/misc";

export const switchDrawType = (currentType: DrawType, targetType: DrawType) => {
  LayersStore.clearVectorLayer(measurementLayerId);
  TooltipStore.hide();

  if (currentType === targetType) {
    InteractionsStore.drawType = "none";
  } else {
    InteractionsStore.drawType = targetType;
  }
};
