import { Button, ButtonGroup } from "@blueprintjs/core";
import { observer } from "mobx-react-lite";

import { wrapper } from "./controls.module.scss";

import { ViewStore } from "../../../../../stores/map";

const ViewControls = () => {
  const zoomIn = () => {
    ViewStore.zoomIn();
  };

  const zoomOut = () => {
    ViewStore.zoomOut();
  };

  return (
    <ButtonGroup vertical className={wrapper}>
      <Button icon="zoom-in" onClick={zoomIn} />
      <Button icon="zoom-out" onClick={zoomOut} />
    </ButtonGroup>
  );
};

export default observer(ViewControls);
