import { Collapse, Tag } from "@blueprintjs/core";
import { v4 as uuid } from "uuid";
import { useState } from "react";

import * as css from "./changes.module.scss";

import { ChangeSet } from "../../../types/map";

interface Props<T> {
  set: ChangeSet<T>;
}

const Changes = <T,>({ set }: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <Tag
        fill
        interactive
        onClick={handleClick}
        intent={"primary"}
        large
        rightIcon={isOpen ? "caret-up" : "caret-down"}
      >
        {"Набор изменений"}
      </Tag>
      <Collapse isOpen={isOpen} transitionDuration={0}>
        {set.map((change) => {
          switch (change.action) {
            case "createFeature":
              return (
                <Tag fill key={uuid()} className={css.change}>
                  {"Создание Feature"}
                </Tag>
              );
            case "modifyFeature":
              return (
                <Tag fill key={uuid()} className={css.change}>
                  {"Изменение Feature"}
                </Tag>
              );
            case "translateFeature":
              return (
                <Tag fill key={uuid()} className={css.change}>
                  {"Перемещение Feature"}
                </Tag>
              );
            default:
              return;
          }
        })}
      </Collapse>
    </>
  );
};

export default Changes;
