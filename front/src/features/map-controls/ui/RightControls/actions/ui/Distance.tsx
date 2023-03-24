import { Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { InteractionsStore } from "@shared/misc";
import { LineStringFilled, Condition } from "@shared/ui";

import { wrapper } from "./action.module.scss";
import { switchDrawType } from "../model";

interface Props {
  type: "default" | "text";
}

const Distance = ({ type }: Props) => {
  const context = useContext(SchemaTemplateContext);
  const drawType = InteractionsStore.drawType;

  const classes = classNames({
    [wrapper]: type === "default",
  });

  return (
    <Condition truthy={context?.fastControls?.distance}>
      <Button
        className={classes}
        icon={<LineStringFilled />}
        type={drawType === "measure-length" ? "primary" : type}
        onClick={() => switchDrawType(drawType, "measure-length")}
      />
    </Condition>
  );
};

export default observer(Distance);
