import { observer } from "mobx-react-lite";
import { HTMLSelect } from "@blueprintjs/core";
import { ChangeEventHandler } from "react";

import { InteractionsStore } from "../../../../stores/map";
import { DrawType } from "../../../../types/DrawType";

const DrawSelect = () => {
  const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    InteractionsStore.drawType = e.target.value as DrawType;
  };

  return (
    <HTMLSelect fill value={InteractionsStore.drawType} onChange={onSelect}>
      <option value={"None"}>Курсор</option>
      <option value={"Polygon"}>Полигон</option>
      <option value={"Circle"}>Круг</option>
      <option value={"LineString"}>Линия</option>
      <option value={"Point"}>Точка</option>
    </HTMLSelect>
  );
};

export default observer(DrawSelect);
