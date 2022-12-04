import { Button, ButtonGroup } from "@blueprintjs/core";

import { wrapper } from "./zoom.module.scss";

import { ViewStore } from "../../../../../../stores/map";

const Zoom = () => {
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

export default Zoom;
