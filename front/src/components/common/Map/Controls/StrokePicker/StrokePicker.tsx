import { observer } from "mobx-react-lite";

import { StylesStore } from "../../../../../stores/map";
import ColorPicker from "../../../../auxiliary/ColorPicker";

const StrokePicker = () => {
  const setColor = (color: string) => {
    StylesStore.strokeColor = color;
  };

  return (
    <ColorPicker
      setColor={setColor}
      color={StylesStore.strokeColor}
      label={"Цвет границы: "}
    />
  );
};

export default observer(StrokePicker);
