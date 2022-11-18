import { Feature } from "ol";
import { FeatureLike } from "ol/Feature";

import { Change, ChangeSet, Undo } from "../../types/map";

export const rememberFeaturesModifying = (
  initial: Feature[],
  modified: Feature[]
) => {
  const set: ChangeSet<FeatureLike> = [];

  const undo: Undo<FeatureLike> = (
    oldFeature: FeatureLike,
    newFeature: FeatureLike
  ) => {
    (newFeature as Feature).setGeometry((oldFeature as Feature).getGeometry());
  };

  for (const newFeature of modified) {
    const oldFeature = initial.at(modified.indexOf(newFeature));

    if (oldFeature) {
      const change: Change<FeatureLike> = {
        action: "modifyFeature",
        newValue: newFeature,
        oldValue: oldFeature,
        undo: undo,
      };

      set.push(change);
    }
  }

  return set;
};
