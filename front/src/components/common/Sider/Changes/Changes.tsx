import { Tag } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { FeatureLike } from "ol/Feature";
import { v4 as uuid } from "uuid";

import { wrapper } from "./changes.module.scss";

import Change from "../../../../types/map/Change";
import { FeaturesChangesStore } from "../../../../stores";

const historyRenderer = (change: Change<FeatureLike[]>) => {
  switch (change.action) {
    case "createFeature":
      return (
        <Tag fill large key={uuid()} interactive>
          {"Создание Feature"}
        </Tag>
      );
    case "modifyFeature":
      return (
        <Tag fill large key={uuid()} interactive>
          {"Изменение Feature"}
        </Tag>
      );
    case "translateFeature":
      return (
        <Tag fill large key={uuid()} interactive>
          {"Перемещение Feature"}
        </Tag>
      );
    default:
      return;
  }
};

const Changes = () => {
  const history = FeaturesChangesStore.featuresHistory;

  return <div className={wrapper}>{history.map(historyRenderer)}</div>;
};

export default observer(Changes);
