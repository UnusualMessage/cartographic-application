import { Spinner } from "@blueprintjs/core";
import React from "react";

import { wrapper } from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={wrapper}>
      <Spinner intent={"primary"} />
    </div>
  );
};

export default Loader;
