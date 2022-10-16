import { Button, ButtonGroup } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { left } from "./group.module.scss";

import { ViewStore } from "../../../../stores";

const LeftButtonGroup = () => {
  const zoomIn = () => {
    ViewStore.zoomIn();
  };

  const zoomOut = () => {
    ViewStore.zoomOut();
  };

  return (
    <ButtonGroup vertical className={left}>
      <Button icon="zoom-in" onClick={zoomIn} />
      <Button icon="zoom-out" onClick={zoomOut} />
    </ButtonGroup>
  );
};

export default observer(LeftButtonGroup);
