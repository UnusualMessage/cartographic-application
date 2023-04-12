import { Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import {
  InteractionsStore,
  ControlsStore,
  MeasurementStore,
  MapControls,
  Interactions,
} from "@shared/misc";
import { LineStringFilled, Condition } from "@shared/ui";

import { wrapper } from "./action.module.scss";
import { switchDrawType } from "../../model";

interface Props {
  buttonType: "default" | "text";
}

const Distance = ({ buttonType }: Props) => {
  const context = useContext(SchemaTemplateContext);
  const interaction = InteractionsStore.type;

  const classes = classNames({
    [wrapper]: buttonType === "default",
  });

  const onClick = () => {
    ControlsStore.currentMapControl = MapControls.measurement;
    switchDrawType(interaction, Interactions.length);
    MeasurementStore.reset();
  };

  return (
    <Condition truthy={context?.fastControls?.distance}>
      <Button
        className={classes}
        icon={<LineStringFilled />}
        type={interaction === Interactions.length ? "primary" : buttonType}
        onClick={onClick}
      />
    </Condition>
  );
};

export default observer(Distance);
