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
  buttonType: "default" | "text";
}

const Distance = ({ buttonType }: Props) => {
  const context = useContext(SchemaTemplateContext);
  const interaction = InteractionsStore.type;

  const classes = classNames({
    [wrapper]: buttonType === "default",
  });

  return (
    <Condition truthy={context?.fastControls?.distance}>
      <Button
        className={classes}
        icon={<LineStringFilled />}
        type={interaction === "measure-length" ? "primary" : buttonType}
        onClick={() => switchDrawType(interaction, "measure-length")}
      />
    </Condition>
  );
};

export default observer(Distance);
