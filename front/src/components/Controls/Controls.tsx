import classNames from "classnames";
import { observer } from "mobx-react-lite";

import css from "./controls.module.scss";

const Controls = () => {
  return (
    <div className={classNames(css.wrapper)}>
    </div>
  );
};

export default observer(Controls);