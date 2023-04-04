import { AimOutlined } from "@ant-design/icons";
import { Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import {
  InteractionsStore,
  ControlsStore,
  MeasurementStore,
} from "@shared/misc";
import { Condition } from "@shared/ui";

import { wrapper } from "./action.module.scss";
import { switchDrawType } from "../../model";

interface Props {
  buttonType: "default" | "text";
}

const Coordinate = ({ buttonType }: Props) => {
  const context = useContext(SchemaTemplateContext);
  const interaction = InteractionsStore.type;

  const classes = classNames({
    [wrapper]: buttonType === "default",
  });

  const onClick = () => {
    ControlsStore.currentMapControl = "measurement";
    switchDrawType(interaction, "measure-coordinate");
    MeasurementStore.reset();
  };

  return (
    <Condition truthy={context?.fastControls?.coordinate}>
      <Button
        className={classes}
        icon={<AimOutlined />}
        type={interaction === "measure-coordinate" ? "primary" : buttonType}
        onClick={onClick}
      />
    </Condition>
  );
};

export default observer(Coordinate);
