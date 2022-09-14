import classNames from "classnames";
import { observer } from "mobx-react-lite";

import css from "./controls.module.scss";
import DrawSelect from "./DrawSelect/DrawSelect";

const Controls = () => {
  return (
    <div className={classNames(css.wrapper)}>
      <DrawSelect />
    </div>
  );
};

export default observer(Controls);
