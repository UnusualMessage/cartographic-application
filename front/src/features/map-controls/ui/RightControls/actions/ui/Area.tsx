import { Button } from "antd";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { SchemaTemplateContext } from "@shared/constants";
import { InteractionsStore } from "@shared/misc";
import { PolygonFilled, Condition } from "@shared/ui";

import { wrapper } from "./action.module.scss";
import { switchDrawType } from "../model";

interface Props {
  type: "default" | "text";
}

const Area = ({ type }: Props) => {
  const context = useContext(SchemaTemplateContext);
  const drawType = InteractionsStore.drawType;

  const classes = classNames({
    [wrapper]: type === "default",
  });

  return (
    <Condition truthy={context?.fastControls?.area}>
      <Button
        className={classes}
        icon={<PolygonFilled />}
        type={drawType === "measure-area" ? "primary" : type}
        onClick={() => switchDrawType(drawType, "measure-area")}
      />
    </Condition>
  );
};

export default observer(Area);
