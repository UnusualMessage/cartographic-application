import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { Stack } from "@mui/material";

import css from "./controls.module.scss";

import DrawSelect from "./DrawSelect";
import DrawSwitch from "./DrawSwitch";

const Controls = () => {
  return (
    <Stack
      className={classNames(css.wrapper)}
      flexDirection={"column"}
      spacing={3}
    >
      <DrawSelect />
      <DrawSwitch />
    </Stack>
  );
};

export default observer(Controls);
