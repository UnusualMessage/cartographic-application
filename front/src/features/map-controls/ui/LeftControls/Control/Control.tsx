import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { ControlsStore } from "@shared/misc";

import { wrapper, header } from "./control.module.scss";
import {
  Title,
  Measure,
  Search,
  Panel,
  ShareResult,
  MeasurementResult,
  PrintResult,
  Draw,
  Layers,
  LayersResult,
} from "./ui";

const Control = () => {
  const controlType = ControlsStore.currentMapControl;
  const context = useContext(SchemaTemplateContext);

  let control = <></>;
  let panel = <></>;
  let label = "";

  switch (controlType) {
    case "measurement":
      control = <Measure />;
      label = "Измерение";
      panel = (
        <Panel>
          <MeasurementResult />
        </Panel>
      );
      break;
    case "share":
      label = "Поделиться";
      panel = (
        <Panel>
          <ShareResult />
        </Panel>
      );
      break;
    case "edit":
      control = <Draw />;
      label = "Рисование";
      break;
    case "layers":
      control = <Layers />;
      panel = (
        <Panel>
          <LayersResult />
        </Panel>
      );
      label = "Слои";
      break;
    case "search":
      control = <Search />;
      break;
  }

  if (context?.misc?.print) {
    label = "Печать";
    panel = (
      <Panel>
        <PrintResult />
      </Panel>
    );
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
