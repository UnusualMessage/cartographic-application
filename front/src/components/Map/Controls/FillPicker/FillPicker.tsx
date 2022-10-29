import { observer } from "mobx-react-lite";

import ColorPicker from "../../../common/ColorPicker/ColorPicker";
import { StylesStore } from "../../../../stores/map";

const FillPicker = () => {
  const setColor = (color: string) => {
    StylesStore.fillColor = color;
  };

  return (
    <ColorPicker
      setColor={setColor}
      color={StylesStore.fillColor}
      label={"Цвет заливки: "}
    />
  );
};

export default observer(FillPicker);
