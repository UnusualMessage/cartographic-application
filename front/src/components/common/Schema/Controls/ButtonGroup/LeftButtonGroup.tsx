import { Button, ButtonGroup } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { left, wrapper } from "./group.module.scss";

import { ViewStore } from "../../../../../stores/map";
import classNames from "classnames";

const LeftButtonGroup = () => {
  const zoomIn = () => {
    ViewStore.zoomIn();
  };

  const zoomOut = () => {
    ViewStore.zoomOut();
  };

  return (
    <ButtonGroup vertical className={classNames(wrapper, left)}>
      <Button icon="zoom-in" onClick={zoomIn} />
      <Button icon="zoom-out" onClick={zoomOut} />
    </ButtonGroup>
  );
};

export default observer(LeftButtonGroup);
