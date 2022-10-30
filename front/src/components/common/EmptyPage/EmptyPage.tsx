import { Button, NonIdealState } from "@blueprintjs/core";
import React from "react";
import { Link } from "react-router-dom";

const ToHome = () => {
  return (
    <Link to={"/"}>
      <Button
        outlined={true}
        text="На главную"
        icon="home"
        intent={"primary"}
      />
    </Link>
  );
};

const EmptyPage = () => {
  return (
    <NonIdealState
      icon={"search"}
      title={"404"}
      description={"Страница не найдена!"}
      action={<ToHome />}
    />
  );
};

export default EmptyPage;
