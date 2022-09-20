import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { Stack } from "@mui/material";

import css from "./controls.module.scss";

import DrawSelect from "./DrawSelect";
import DrawSwitch from "./DrawSwitch";
import DrawClear from "./DrawClear/DrawClear";

const Controls = () => {
  return (
    <Stack
      className={classNames(css.wrapper)}
      flexDirection={"column"}
      spacing={3}
    >
      <DrawSelect />
      <DrawSwitch />
      <DrawClear />
    </Stack>
  );
};

export default observer(Controls);
