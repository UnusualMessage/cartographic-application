import { ChangeEventHandler } from "react";

import * as css from "./picker.module.scss";

interface Props {
  color: string;
  setColor: (color: string) => void;
  label: string;
}

const ColorPicker = ({ color, setColor, label }: Props) => {
  const pickColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={"fill-color"}>
        {label}
      </label>
      <input
        value={color}
        className={css.color}
        name={"fill-color"}
        type={"color"}
        onChange={pickColor}
      />
    </div>
  );
};

export default ColorPicker;
