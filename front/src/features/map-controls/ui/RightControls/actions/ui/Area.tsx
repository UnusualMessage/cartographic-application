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
  buttonType: "default" | "text";
}

const Area = ({ buttonType }: Props) => {
  const context = useContext(SchemaTemplateContext);
  const interaction = InteractionsStore.type;

  const classes = classNames({
    [wrapper]: buttonType === "default",
  });

  return (
    <Condition truthy={context?.fastControls?.area}>
      <Button
        className={classes}
        icon={<PolygonFilled />}
        type={interaction === "measure-area" ? "primary" : buttonType}
        onClick={() => switchDrawType(interaction, "measure-area")}
      />
    </Condition>
  );
};

export default observer(Area);
