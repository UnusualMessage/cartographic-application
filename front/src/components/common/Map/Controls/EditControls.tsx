import classNames from "classnames";

import { edit, wrapper } from "./controls.module.scss";

import DrawSelect from "./DrawSelect";
import FillPicker from "./FillPicker";
import StrokePicker from "./StrokePicker";

const EditControls = () => {
  return (
    <div className={classNames(wrapper, edit)}>
      <DrawSelect />
      <FillPicker />
      <StrokePicker />
    </div>
  );
};

export default EditControls;
