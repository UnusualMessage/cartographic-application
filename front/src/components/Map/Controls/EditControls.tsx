import { wrapper } from "./controls.module.scss";

import DrawSelect from "./DrawSelect";
import FillPicker from "./FillPicker";
import StrokePicker from "./StrokePicker";

const EditControls = () => {
  return (
    <div className={wrapper}>
      <DrawSelect />
      <FillPicker />
      <StrokePicker />
    </div>
  );
};

export default EditControls;
