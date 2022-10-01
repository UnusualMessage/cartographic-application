import { ChangeEventHandler } from "react";

import { wrapper } from "./picker.module.scss";

interface Props {
  setColor: (color: string) => void;
}

const ColorPicker = ({ setColor }: Props) => {
  const pickColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className={wrapper}>
      <label htmlFor={"fill-color"}>Выберите цвет:</label>
      <input
        name={"fill-color"}
        id={"fill-color"}
        type={"color"}
        onChange={pickColor}
      />
    </div>
  );
};

export default ColorPicker;
