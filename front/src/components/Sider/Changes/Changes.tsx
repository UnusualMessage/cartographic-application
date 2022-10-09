import { Button, Tag } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";
import { FeatureLike } from "ol/Feature";
import { v4 as uuid } from "uuid";

import { tools, wrapper } from "./changes.module.scss";

import Change from "../../../types/Change";
import { FeaturesChangesStore } from "../../../stores/changes";

const historyRenderer = (change: Change<FeatureLike[]>) => {
  switch (change.action) {
    case "createFeature":
      return (
        <Tag fill large key={uuid()}>
          {"Создание Feature"}
        </Tag>
      );
    case "modifyFeature":
      return (
        <Tag fill large key={uuid()}>
          {"Изменение Feature"}
        </Tag>
      );
    case "translateFeature":
      return (
        <Tag fill large key={uuid()}>
          {"Перемещение Feature"}
        </Tag>
      );
    default:
      return;
  }
};

const Changes = () => {
  const history = FeaturesChangesStore.featuresHistory;

  const save = () => {
    FeaturesChangesStore.save();
  };

  const undo = () => {
    FeaturesChangesStore.undo();
  };

  return (
    <div className={wrapper}>
      <div className={tools}>
        <Button
          text={"Сохранить"}
          intent={"success"}
          onClick={save}
          icon={"confirm"}
          fill
          small
        />

        <Button
          text={"Отменить"}
          intent={"warning"}
          onClick={undo}
          icon={"undo"}
          fill
          small
        />
      </div>
      {history.map(historyRenderer)}
    </div>
  );
};

export default observer(Changes);
