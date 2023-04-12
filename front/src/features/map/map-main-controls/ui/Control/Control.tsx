import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ControlsStore, MapControls } from "@shared/misc";
import { Title } from "entities/map";

import { wrapper, header } from "./control.module.scss";
import { Measure, Draw, Layers, Search } from "../controls";
import {
  MeasurementResult,
  ShareResult,
  DrawResult,
  LayersResult,
  PrintResult,
} from "../panels";

const Control = () => {
  const controlType = ControlsStore.currentMapControl;
  const context = useContext(SchemaTemplateContext);

  let control = <></>;
  let panel = <></>;
  let label = "";

  switch (controlType) {
    case MapControls.measurement:
      control = <Measure />;
      label = "Измерение";
      panel = <MeasurementResult />;
      break;
    case MapControls.share:
      label = "Поделиться";
      panel = <ShareResult />;
      break;
    case MapControls.edit:
      control = <Draw />;
      panel = <DrawResult />;
      label = "Рисование";
      break;
    case MapControls.layers:
      control = <Layers />;
      panel = <LayersResult />;
      label = "Слои";
      break;
    case MapControls.search:
      control = <Search />;
      break;
  }

  if (context?.misc?.print) {
    label = "Печать";
    control = <></>;
    panel = <PrintResult />;
  }

  return (
    <div className={wrapper}>
      <div className={header}>
        <Title label={label} />
        {control}
      </div>
      {panel}
    </div>
  );
};

export default observer(Control);
