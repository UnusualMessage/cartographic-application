import { observer } from "mobx-react-lite";

import { wrapper } from "./controls.module.scss";

import DrawSelect from "./DrawSelect";
import DrawSwitch from "./DrawSwitch";
import DrawClear from "./DrawClear";
import FillPicker from "./FillPicker";
import StrokePicker from "./StrokePicker";

const Controls = () => {
  return (
    <div className={wrapper}>
      <DrawSelect />
      <DrawSwitch />
      <DrawClear />
      <FillPicker />
      <StrokePicker />
    </div>
  );
};

export default observer(Controls);
