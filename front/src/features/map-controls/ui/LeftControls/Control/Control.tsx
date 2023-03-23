import { observer } from "mobx-react-lite";

import { ControlsStore } from "@shared/misc";

import { wrapper, header } from "./control.module.scss";
import {
  Title,
  Measure,
  Search,
  Share,
  Panel,
  ShareResult,
  MeasurementResult,
  Print,
  PrintResult,
} from "./ui";

const Control = () => {
  const controlType = ControlsStore.currentMapControl;

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
      control = <Share />;
      label = "Поделиться";
      panel = (
        <Panel>
          <ShareResult />
        </Panel>
      );
      break;
    case "search":
      control = <Search />;
      break;
    case "print":
      control = <Print />;
      label = "Печать";
      panel = (
        <Panel>
          <PrintResult />
        </Panel>
      );
      break;
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
