import classNames from "classnames";
import { ChangeEventHandler } from "react";

import css from "./select.module.scss";

import InteractionsStore from "../../../stores/InteractionsStore";
import { DrawType } from "../../../types/DrawType";

const DrawSelect = () => {
  const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    InteractionsStore.changeDrawType(e.target.value as DrawType);
  };

  return (
    <div className={classNames(css.wrapper)}>
      <select
        className={classNames(css.select)}
        onChange={onSelect}
        defaultValue={"Point"}
      >
        <option value={"Polygon"} label={"Полигон"} />
        <option value={"Circle"} label={"Круг"} />
        <option value={"LineString"} label={"Линия"} />
        <option value={"Point"} label={"Точка"} />
      </select>
    </div>
  );
};

export default DrawSelect;
