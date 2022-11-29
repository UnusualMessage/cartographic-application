import { observer } from "mobx-react-lite";
import { HTMLSelect } from "@blueprintjs/core";
import { ChangeEventHandler } from "react";

import { wrapper } from "./draw.module.scss";

import { InteractionsStore } from "../../../../../stores/map";
import { InteractionType } from "../../../../../types/map";

const DrawSelect = () => {
  const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    InteractionsStore.interactionType = e.target.value as InteractionType;
  };

  return (
    <HTMLSelect
      fill
      className={wrapper}
      value={InteractionsStore.interactionType}
      onChange={onSelect}
    >
      <option value={"cursor"}>Курсор</option>
      <option value={"geozones"}>Геозоны</option>
    </HTMLSelect>
  );
};

export default observer(DrawSelect);
