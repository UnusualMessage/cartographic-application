import { NonIdealState } from "@blueprintjs/core";
import React from "react";

const EmptyInformation = () => {
  return (
    <NonIdealState
      icon={"issue"}
      title={"Информация и действия отсутствуют!"}
      description={"Они обязательно появятся!"}
    />
  );
};

export default EmptyInformation;
