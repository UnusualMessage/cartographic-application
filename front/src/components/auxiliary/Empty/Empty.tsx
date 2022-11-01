import { NonIdealState } from "@blueprintjs/core";
import React from "react";

const Empty = () => {
  return (
    <NonIdealState
      icon={"issue"}
      title={"Пусто :("}
      description={"Информация скоро появится!"}
    />
  );
};

export default Empty;
