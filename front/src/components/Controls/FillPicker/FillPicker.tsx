import { observer } from "mobx-react-lite";

import ColorPicker from "../../common/ColorPicker/ColorPicker";
import StylesStore from "../../../stores/StylesStore";

const FillPicker = () => {
  const setColor = (color: string) => {
    StylesStore.fillColor = color;
  };

  return <ColorPicker setColor={setColor} />;
};

export default observer(FillPicker);
