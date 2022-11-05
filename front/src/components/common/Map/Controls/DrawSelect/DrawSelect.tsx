import { observer } from "mobx-react-lite";
import { HTMLSelect } from "@blueprintjs/core";
import { ChangeEventHandler } from "react";

import { InteractionsStore } from "../../../../../stores/map";
import { InteractionType } from "../../../../../types/map";

const DrawSelect = () => {
  const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    InteractionsStore.interactionType = e.target.value as InteractionType;
  };

  return (
    <HTMLSelect
      fill
      value={InteractionsStore.interactionType}
      onChange={onSelect}
    >
      <option value={"cursor"}>Курсор</option>
      <option value={"geozones"}>Геозоны</option>
      <option value={"equipment"}>Техника</option>
    </HTMLSelect>
  );
};

export default observer(DrawSelect);
