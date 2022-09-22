import StylesStore from "../../../stores/StylesStore";
import ColorPicker from "../../common/ColorPicker";

const StrokePicker = () => {
  const setColor = (color: string) => {
    StylesStore.strokeColor = color;
  };

  return <ColorPicker setColor={setColor} />;
};

export default StrokePicker;
