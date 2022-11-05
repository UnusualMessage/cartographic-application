import classNames from "classnames";

import { edit, wrapper } from "./controls.module.scss";

import DrawSelect from "./DrawSelect";

const EditControls = () => {
  return (
    <div className={classNames(wrapper, edit)}>
      <DrawSelect />
    </div>
  );
};

export default EditControls;
